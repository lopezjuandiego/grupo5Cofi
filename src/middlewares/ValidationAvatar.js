const validator = require('express-validator');
const db = require("../database/models");
const path = require('path');

const validations = [


    validator.body('avatar')
    .custom((value, { req }) => {
    
        let file = req.files[0];
     let acceptedExtensions = ['.jpg', '.jpeg','.png', '.gif'];
     
     if (!file) {
          throw new Error('Tenés que subir una imagen');
     } else {
          let fileExtension = path.extname(file.originalname);
    
          if (!acceptedExtensions.includes(fileExtension)) {
               throw new Error(`Las formatos válidos son: ${acceptedExtensions.join(', ')}`);
          }
     }
     return true;
})
]

module.exports = validations;