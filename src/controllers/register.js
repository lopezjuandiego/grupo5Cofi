const controllers = {

    register: (req,res)  => res.render('register' ,{
        styles : ["register"],
        title: "Registro"
    })
    
    
    }
    
    module.exports = controllers;