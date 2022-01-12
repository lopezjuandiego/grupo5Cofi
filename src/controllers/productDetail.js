const controllers = {

    productDetail: (req,res)  => res.render('productDetail',{
        styles : ["productDetail"],
        title: "Productos",
    })
    
    
    }
    
    module.exports = controllers;