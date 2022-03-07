//const product = require("../models/product")
const db = require("../database/models")
const file = require("../models/file")

const controllers = {

 
  list: (req, res) => {
    db.Product.findAll({
      include: [ "origen", "grano","cantidad","imagen"],
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


create: (req, res) => Promise.all([db.Origen.findAll(), db.Grano.findAll(), db.Gramo.findAll()])
.then(([origenes, granos, gramos])=> {
  res.render('products/create', {
    styles: ['product/create'],
    title: 'NUEVO PRODUCTO',
    origenes: origenes,
    granos: granos,
    gramos: gramos
})
})
/* 
}) */,

save: (req, res) => {
  db.Product.create({

      OrigenID: req.body.origen,
      GranoID: req.body.tipoDeGrano,
      CantidadID: req.body.cantidad,
      Precio: req.body.precio,
      Oferta: req.body.oferta ? true : false,
      //ImagenID: req.body.imagen ? req.body.imagen : null,
      //ImagenID: req.body.files.map (file => fileModel.create(file).id)
  })
 
  .then(()=> {
    return res.redirect('/product')})            
  .catch(error => res.send(error))
},

show : (req, res) => {
  db.Product.findByPk(req.params.id,
      {
          include : ["origen", "grano","cantidad"]
      })
      .then(product => {
        res.render('products/item', {
          styles: ['product/item'],
          title: 'PRODUCTO',
          product: product,
      });
})
},
  
/* edit: (req, res) => {
  let productId = req.params.id
  let productPK = db.Product.findByPk(productId,{
    include: [ "origen", "grano","cantidad"],
  })
  Promise
  .all([productPK, db.Origen.findAll(), db.Grano.findAll(), db.Gramo.findAll()])
  .then(([product, origenes, granos, gramos])=> {
     res.render('products/item', {
      styles: ['product/item'],
      title: 'PRODUCTO',
      product: product,
      origenes: origenes,
      granos: granos,
      gramos: gramos
  }) 
})
.catch(error => res.send(error))

},  */


  update: (req, res) => res.render("products/update", {
    styles: ["product/create"],
    title: "MODIFICAR",
    product: product.search('id', req.params.id)

  }),

  modify: (req, res) => {
    let updated = product.update(req.params.id, req.body)
    //return res.send(updated);
    return res.redirect('/product/' + updated.id)
  },

  delete: (req,res) => {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('/product')
  },
}

module.exports = controllers


