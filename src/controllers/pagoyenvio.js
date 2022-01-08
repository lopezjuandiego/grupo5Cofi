const controllers = {

    pagoyenvio: (req,res)  => res.render('pagoyenvio',{
        styles : ["pagoyenvio"],
        title: "Pago y envío",
    })
    
    
    }
    
    module.exports = controllers;