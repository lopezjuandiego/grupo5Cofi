const validator = require('express-validator');
const user = require('../models/user');
const validations = [
    validator.body('email').isEmail().withMessage('El email no es válido').custom(value => {
        let search = user.search('email', value);
        return search ? Promise.reject('El email ya esta registrado') : Promise.resolve();
    }),
    validator.body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres')
    .matches(/^.*(?=.{6,})(?=.*[a-zA-Z]).*$/)
    .withMessage('Debe tener al menos 6 caracteres y una o más letras')
]

module.exports = validations;