const product = require ("../models/product")
const file = require("../models/file")

const controllers = {
    index: (req,res)  => res.render('products/list', {
      styles: ['product/product'],
      title: 'LISTADO',
      products: product.all()
    }),
    create: (req,res)  => res.render('products/create', {
      styles: ['product/create'],
      title: 'CREAR Y MODIFICAR',

    }),
    save: (req,res) => {
      req.body.files = req.files;
      let created = product.create(req.body)
      return res.redirect("/")}
}

    module.exports = controllers
