const controllers = {

    login: (req,res)  => res.render('login',{
        styles : ["login"],
        title: "Login",
    })
    
    }
    
    module.exports = controllers;