const controllers = {

    product: (req,res)  => res.render('products/list', {

      styles: ['product/product'],
      title: 'LISTADO',
     product: []

    }),

    create: (req,res)  => res.render('products/create', {

      styles: ['product/create'],
      title: 'CREAR Y MODIFICAR',

    }),
    save: (req,res)  => res.render(req.body)
    
    }
    
    module.exports = controllers;