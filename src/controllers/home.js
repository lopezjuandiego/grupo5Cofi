const controllers = {

    index: (req,res)  => res.render('home',{
        style:["css/homes"] ,
        tittle:home ,
    })
    
    }
    
    module.exports = controllers;