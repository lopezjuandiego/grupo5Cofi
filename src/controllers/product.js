const controllers = {

    product: (req,res)  => res.render('products/list', {

      
      title: 'Productos',
      products: []

    })
    
    }
    
    module.exports = controllers;