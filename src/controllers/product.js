//const product = require("../models/product")
const validator = require("express-validator");
const db = require("../database/models")
const file = require("../models/file")
const Op = db.Sequelize.Op
const controllers = {

  //LISTADO DE PRODUCTOS
  list: (req, res) => {
    db.Product.findAll({
      include: ["origen", "grano", "cantidad", "imagen"],
    })
      .then(products => {
        //res.send (products)
        res.render("products/list", {
          styles: ["product/product"],
          title: "PRODUCTOS",
          products: products
        })
      })
      .catch(error => res.send(error))
  },

  //CREACION DE PRODUCTOS
  create: (req, res) => Promise.all([db.Origen.findAll(), db.Grano.findAll(), db.Gramo.findAll()])
    .then(([origenes, granos, gramos]) => {
      res.render('products/create', {
        styles: ['product/create'],
        title: 'NUEVO PRODUCTO',
        origenes: origenes,
        granos: granos,
        gramos: gramos,
      })
    }),
  save: (req, res) => {

    let errors = validator.validationResult(req)
    if (!errors.isEmpty()) {
      Promise.all([db.Origen.findAll(), db.Grano.findAll(), db.Gramo.findAll()])
        .then(([origenes, granos, gramos]) => {
          res.render('products/create', {
            styles: ['product/create'],
            title: 'NUEVO PRODUCTO',
            origenes: origenes,
            granos: granos,
            gramos: gramos,
            errors: errors.mapped(),
            oldData: req.body,
          })
        })
    } else {
      db.Imagen.create({
        Url: req.files[0].filename, Type: 1
      })
        .then(cafeImagen => {
          db.Product.create({
            OrigenID: req.body.origen,
            GranoID: req.body.tipoDeGrano,
            CantidadID: req.body.cantidad,
            Precio: req.body.precio,
            Oferta: req.body.oferta ? true : false,
            ImagenID: cafeImagen.id,
          })
            .then(() => {
              return res.redirect('/product')
            })
            .catch(error => res.send(error))
        })
    }
  },

  //MUESTRA PRODUCTO INDIVIDUAL
  show: (req, res) => {
    db.Product.findByPk(req.params.id,
      {
        include: ["origen", "grano", "cantidad", "imagen"]
      })
      .then(product => {
        res.render('products/item', {
          styles: ['product/item'],
          title: 'Cafe  ' + product.origen.country,
          product: product,
        });
      })
  },

  //MODIFICAR PRODUCTO
  edit: (req, res) => {
    let productId = req.params.id
    let productPK = db.Product.findByPk(productId, {
      include: ["origen", "grano", "cantidad"],
    })
    Promise
      .all([productPK, db.Origen.findAll(), db.Grano.findAll(), db.Gramo.findAll()])
      .then(([product, origenes, granos, gramos]) => {
        res.render('products/update', {
          styles: ['product/productEdit'],
          title: 'EDITAR PRODUCTO',
          product: product,
          origenes: origenes,
          granos: granos,
          gramos: gramos
        })
      })
      .catch(error => res.send(error))
  },

  update: function (req, res) {
    db.Product.update(
      {
        OrigenID: req.body.origen,
        GranoID: req.body.tipoDeGrano,
        CantidadID: req.body.cantidad,
        Precio: req.body.precio,
        Oferta: req.body.oferta ? true : false,
      },
      {
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        return res.redirect('/product')
      })
      .catch(error => res.send(error))
  },

  //ELIMINAR PRODUCTO
  delete: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((products) => {
        db.Product.destroy({
          where: {
            id: products.id
          }
        })
          .then(imagens => {
            db.Imagen.destroy({
              where: {
                id: products.ImagenID,
              },
            })
              .then(() => {
                res.redirect('/product')
              })
              .catch((error) => res.send(error));
          })
          .catch((error) => res.send(error));
      })
      .catch((error) => res.send(error));

  },

  //BUSCADOR DE PRODUCTO
  search: (req, res) => {
   
    db.Origen.findOne({
      where: {
        country: { [Op.like]: "%" + req.query.buscar + "%" },
      }
    })
      .then(country => {
        db.Product.findAll({
          include: ["origen", "grano", "cantidad"],
          where: {
            OrigenID: country.id,
          }
        })
          .then(cafe => {
           // res.send(cafe);
             return res.render('products/search', {
              styles: ['product/item'],
              title: 'Resultado',
              cafe: cafe ? cafe : [],
            }) 
          })
          .catch((error) => res.render('products/search', {
            styles: ['product/item'],
            title: 'Resultado',
            cafe: [],
          }) );
      })
      .catch((error) => res.render('products/search', {
        styles: ['product/item'],
        title: 'Resultado',
        cafe: [],
      }) );
  }
  
}
module.exports = controllers
