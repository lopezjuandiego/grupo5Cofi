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
      
            title: "LISTADO DE PRODUCTOS",
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
}),

save: (req, res) => {
  db.Product.create({

      OrigenID: req.body.origen,
      GranoID: req.body.tipoDeGrano,
      CantidadID: req.body.cantidad,
      Precio: req.body.precio,
      Oferta: req.body.oferta ? true : false,
      //ImagenID: req.body.imagen ? req.body.imagen : null,
      
  })
 
  .then(()=> {
    
    return res.redirect('/product')})            
  .catch(error => res.send(error))
},

show: (req,res) => {
 Promise.all([db.Grano.findAll()])

  .then(product =>{
    
  //res.send(granos)
    res.render("products/item",{
    styles:["product/item"],                      
    title: 'Cafe ' , 
    product: product,
    
  }) 
 
}) 


.catch(error => res.send(error))

},

 /*let result = db.User.findOne({
  where: {
    email : req.cookies && req.cookies.user ?  req.cookies.user : null
  }})*/
 /* show: (req, res) => {

    let result = product.search('id', req.params.id)
    let productShow = Object({ ...result, imagen: result.imagen.map(imagen => file.search("id", imagen)) })
    return result ? res.render('products/item', {
      styles: ["product/item"],
      title: 'Café ' + result.origen,
      product: productShow
    }) : res.render('error', {
      msg: 'Producto no encontrado'
    })
  },*/
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


