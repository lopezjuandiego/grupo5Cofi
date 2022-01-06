const controllers = {

    login: (req,res)  => res.render('login',{
        style:["css/login"] ,
        tittle:login ,
    
    })
}
    module.exports = controllers;