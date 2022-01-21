const controllers = {

    login: (req,res)  => res.render('users/login',{
        styles : ["login"],
        title: "Login",
    }),

    register: (req,res)  => res.render('users/register' ,{
        styles : ["register"],
        title: "Registro"
    }),
    
    profile: (req,res)  => res.render('users/profile',{
        styles : ["login"],
        title: "Perfil / Profile",
    }),
    
    }
    
    
    
    module.exports = controllers;