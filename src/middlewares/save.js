const validator = require('express-validator');
//const user = require('../models/user');
const db = require("../database/models");
const validations = [
    validator.body('nombre')
    .notEmpty().withMessage('Tenés que completar el campo de Nombre')
    .isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'),

    validator.body('apellido')
    .notEmpty().withMessage('Tenés que completar el campo de Apellido')
    .isLength({min: 2}).withMessage('El apellido debe tener al menos 2 caracteres'),

    validator.body('email')
    .notEmpty().withMessage('Tenés que completar el campo de Email')
    .isEmail().withMessage('El email no es válido')
    .custom (() => { const search = (req, res) => {
        db.User.findOne( {
            where: {
            email : req.body.email
            
        }} )            
        .then((value) => {
            return value ? Promise.reject('El email ya esta registrado') : Promise.resolve();
        })
    }
    }),

        //let search = user.search('email', value);
       // return search ? Promise.reject('El email ya esta registrado') : Promise.resolve();
    
    validator.body('password')
    .notEmpty().withMessage('Tenés que completar el campo de contraseña')
    .isLength({min: 8}).withMessage('La contraseña debe tener al menos 6 caracteres')
    .matches(/^.*(?=.{6,})(?=.*[a-zA-Z]).*$/).withMessage('Debe tener al menos 6 caracteres y una o más letras'),

    validator.body('password2')
    .notEmpty().withMessage('Tenés que completar el campo de repetir contraseña')
    .isLength({min: 8}).withMessage('La contraseña debe tener al menos 6 caracteres')
    .matches(/^.*(?=.{6,})(?=.*[a-zA-Z]).*$/).withMessage('Debe tener al menos 6 caracteres y una o más letras')
]

module.exports = validations;