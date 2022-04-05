const file = require("../models/file")

//SUBIR IMGS JSON
const controller = {
    upload: (req, res) => res.render ('files/upload',{
        styles:["files/upload"],                        
        title: "Archivos | Subir", 
        
    }),
    store: (req,res) => res.send (req.files.map(f => file.create (f)))
}
module.exports = controller