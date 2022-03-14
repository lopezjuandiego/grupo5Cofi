const validator = require('express-validator');
//const user = require('../models/user');
const db = require("../database/models");
const validations = [
    validator.body('email')
    .notEmpty().withMessage('Tenés que completar el campo de email')
    .isEmail().withMessage('El email no es válido'),
       
    validator.body('password')
    .notEmpty().withMessage('Tenés que completar el campo de contraseña')
    .isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres') 
    ]

module.exports = validations;