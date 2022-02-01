const validator = require('express-validator');
const user = require('../models/user');
const validations = [
    validator.body('email').isEmail().withMessage('El email no es válido').custom(value => {
        let search = user.search('email', value);
        return search ? Promise.resolve() : Promise.reject('Tu email no está registrado');
    }),
    validator.body('password').isLength({min: 6})
    .withMessage('La contraseña debe tener al menos 6 caracteres') 
   

]

module.exports = validations;