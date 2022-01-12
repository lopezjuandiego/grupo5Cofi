const controllers = {

    productCart: (req,res)  => res.render('productCart',{
        styles : ["productCart"],
        title: "Carrito"
    })
    
    
    }
    
    module.exports = controllers;