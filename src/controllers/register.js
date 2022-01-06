const controllers = {

    register: (req,res)  => res.render('register', { 
        style : ["css/register"],
        tittle : "registro"

    }) 
    
    }
    
    module.exports = controllers;