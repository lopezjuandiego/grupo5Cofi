const product = require ("../models/product")
const file = require("../models/file")

const controllers = {

    index: (req,res)  => res.render('products/list', {

      styles: ['product/product'],
      title: 'LISTADO',
      products: product.all().map(p => Object({...p, imagen : file.search("id",p.imagen)}))
    }),

    create: (req,res)  => res.render('products/create', {

      styles: ['product/create'],
      title: 'CREAR',

    }),
    save: (req,res) => {
      req.body.files = req.files;
      let created = product.create(req.body)
      return res.redirect("/product")
    },

      show: (req,res) => {
        let result = product.search ('id', req.params.id)
        return result ? res.render('products/item',{
            styles:["product/item"],                      
            title: 'Café '+ result.origen,
            product: result
        }) : res.render ('error',{
          msg: 'Producto no encontrado'
      }) 
    },
    update: (req,res) =>  res.render("products/modify", {
      styles:["product/create"],                        
      title: "Actualizar", 
      product : product.search ('id',req.params.id)
  }),

  modify: (req,res) => {
      let updated = product.modify(req.params.id,req.body)
      return res.redirect('/product')
      },

      delete: (req,res) => {
          product.delete(req.body.id);
          return res.redirect ('/product')
      } 
}

    module.exports = controllers