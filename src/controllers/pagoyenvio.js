const controllers = {

    pagoyenvio: (req,res)  => res.render('pagoyenvio', { 
        style : ["css/pagoyenvio"],
        tittle : "pago y envio"

    }) 
    
    }
    
    module.exports = controllers;