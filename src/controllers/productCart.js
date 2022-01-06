const controllers = {

    productCart: (req,res)  => res.render('productCart', { 
        style : ["css/productCart"],
        tittle : "carrito compra"

    }) 
    
    
    }
    
    module.exports = controllers;