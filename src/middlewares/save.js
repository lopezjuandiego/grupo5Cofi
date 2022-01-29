const validator = require('express-validator');
const user = require('../models/user');
const validations = [
    validator.body('email').isEmail().withMessage('Email inválido').custom(value => {
        let search = user.search('email', value);
        return search ? Promise.reject('Email ya registrado') : Promise.resolve();
    }),
    validator.body('password').isLength({min: 6}).withMessage('Al menos 6 caracteres').matches(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/).withMessage('Debés utilizar al menos 6 caracteres, 1 letra, 1 número y 1 caracter especial')
]

module.exports = validations;