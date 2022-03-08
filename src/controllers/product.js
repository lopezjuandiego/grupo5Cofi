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
}),

save: (req, res) => {
  db.Product.create({

      OrigenID: req.body.origen,
      GranoID: req.body.tipoDeGrano,
      CantidadID: req.body.cantidad,
      Precio: req.body.precio,
      Oferta: req.body.oferta ? true : false,
      ImagenID: req.files[0].filename
         /*.then(imagen => {
          db.Product.update({ImagenID: imagen.id},{
          where: {
            id:req.session.user.id
          }
          })   */       
        
})

  .then(product => {
    
    //res.send(imagen)
    return res.redirect('/product'+ product.id)
  })  

  .catch(error => res.send(error))
  

},
show : (req, res) => {
  db.Product.findByPk(req.params.id,
      {
          include : ["origen", "grano","cantidad","imagen"]
      })
      .then(product => {
        res.render('products/item', {
          styles: ['product/item'],
          title: 'Cafe  ' + product.origen.country,
          product: product,
      });
})
},
  
edit: (req, res) => {
  let productId = req.params.id
  let productPK = db.Product.findByPk(productId,{
    include: [ "origen", "grano","cantidad"],
  })
  Promise
  .all([productPK, db.Origen.findAll(), db.Grano.findAll(), db.Gramo.findAll()])
  .then(([product, origenes, granos, gramos])=> {
     res.render('products/update', {
      styles: ['product/item'],
      title: 'EDITAR PRODUCTO',
      product: product,
      origenes: origenes,
      granos: granos,
      gramos: gramos
  }) 
})
.catch(error => res.send(error))
}, 

update: function (req,res) {
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
            id: req.params.id}
      })
  .then(()=> {
      return res.redirect('/product')
    })            
  .catch(error => res.send(error))
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


