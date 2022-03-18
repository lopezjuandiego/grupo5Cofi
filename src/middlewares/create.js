const validator = require('express-validator');
const db = require("../database/models");
const path = require ('path');

const validations = [

    validator.body('precio')
    .notEmpty().withMessage('Debe ingresar un precio al producto')
    .isLength({min: 2}).withMessage('El precio debe contener al menos 2 digitos'),


 validator.body('imagen')
 .custom((value, {req}) => {

    let file = req.files[0];
    let formatoPermitido = ['.jpg', '.png', '.jpeg']
     
    if(!file){
        throw new Error('Debes subir una imagen')
    } 
    else{
    
        let fileExtension =  path.extname(file.originalname)

        if(!formatoPermitido.includes(fileExtension)){
            throw new Error('Los formatos permitidos son jpg - png - jpeg ')
        }
    
    }
    return true

 })

    

]

module.exports = validations;