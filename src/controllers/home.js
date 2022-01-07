const controllers = {

    index: (req,res)  => res.render('home',{
        styles: ["homes"],
        title: "Home Cofi",
    })
    
    }
    
    module.exports = controllers;