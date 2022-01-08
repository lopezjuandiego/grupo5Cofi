const controllers = {

    product: (req,res)  => res.render('products/list', {

      styles: ['product'],
      title: 'LISTADO',
     product: []

    }),

    create: (req,res)  => res.render('products/create', {

      styles: ['create'],
      title: 'CREAR Y MODIFICAR',

    }),
    save: (req,res)  => res.render(req.body)
    
    }
    
    module.exports = controllers;