//const product = require("../models/product")
const db = require("../database/models")
const file = require("../models/file")

const controllers = {

 
  list: (req, res) => {
    db.Product.findAll({
      include: [ "origen", "grano","cantidad","imagen"],
    })
        .then(products => {
          res.render("products/list", {
            styles: ["product/product"],
      
            title: "USUARIOS REGISTRADOS",
            products: products
              
          })                   
        })
        .catch(error => res.send(error))
},


create: (req, res) => res.render('products/create', {
  styles: ['product/create'],
  title: 'CREAR',
}),

save: (req, res) => {
  //req.body.files = req.files;
  db.Product.create({

      id: req.body.id,
      OrigenID: req.body.origen,
      GranoID: req.body.tipoDeGrano,
      CantidadID: req.body.cantidad,
      Precio: req.body.precio,
      Oferta: req.body.oferta ? true : false,
      //ASI ESTÁ EN EL JS DE PRODUCT - imagen: req.body.files.map (file => fileModel.create(file).id)
      //ASI ESTÁ EN EL USER -avatar: req.body.avatar ? req.body.avatar : null,

  })
    //let created = product.create(req.body)
  return res.redirect("/product")
},


  /*
  save js
  save: (req, res) => {
    req.body.files = req.files;
    let created = product.create(req.body)
    return res.redirect("/product/" + created.id)
  },
  HASTA ACÁ LLEGUE
--------------
*/

  show: (req, res) => {

    let result = product.search('id', req.params.id)
    let productShow = Object({ ...result, imagen: result.imagen.map(imagen => file.search("id", imagen)) })
    return result ? res.render('products/item', {
      styles: ["product/item"],
      title: 'Café ' + result.origen,
      product: productShow
    }) : res.render('error', {
      msg: 'Producto no encontrado'
    })
  },
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

  delete: (req, res) => {
    product.delete(req.body.id);
    return res.redirect('/product')
  }
}

module.exports = controllers


