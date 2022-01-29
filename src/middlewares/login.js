const validator = require('express-validator');
const user = require('../models/user');
const validations = [
    validator.body('email').isEmail().withMessage('Email inválido').custom(value => {
        let search = user.search('email', value);
        return search ? Promise.resolve() : Promise.reject('Tu mail no está registrado');
    }),
    validator.body('password').isLength({min: 6})
    .withMessage('Mínimo 6 caracteres')
    .matches(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
    .withMessage('Debés utilizar al menos 6 caracteres, 1 letra, 1 número y 1 caracter especial')
    .custom((value,{req}) => {
        let search = user.search('email', req.body.email);
        return search && search.password == value ? Promise.resolve() : Promise.reject('Password invalid');
    })
]

module.exports = validations;