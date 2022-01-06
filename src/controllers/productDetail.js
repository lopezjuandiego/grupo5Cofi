const controllers = {

    productDetail: (req,res)  => res.render('productDetail' ,  { 
        style : ["css/productDetail"],
        tittle : "detalle de producto"

    }) 
    
    }
    
    module.exports = controllers;