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
      return res.redirect("/product/" +created.id)
    },

      show: (req,res) => {
        
        let result = product.search ('id', req.params.id)
        let productShow = Object({...result, imagen : result.imagen.map(imagen=> file.search("id",imagen))})      
            return result ? res.render('products/item',{
            styles:["product/item"],                      
            title: 'Café '+ result.origen,
            product: productShow
        }) : res.render ('error',{
          msg: 'Producto no encontrado'
      }) 
    },
    update: (req,res) =>  res.render("products/update", {
      styles:["product/create"],                        
      title: "MODIFICAR", 
      product :product.search ('id',req.params.id)      
      
  }),

      modify: (req,res) => {
      let updated = product.update(req.params.id,req.body)
      //return res.send(updated);
      return res.redirect('/product/'+updated.id)
      },

      delete: (req,res) => {
          product.delete(req.body.id);
          return res.redirect ('/product')
      } 
}

    module.exports = controllers


  