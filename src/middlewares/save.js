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
    .isEmail().withMessage('El formato de correo no es válido')
    .custom(value => {
        return db.User.findOne({
             where: {email: value}
        })
             .then(user => {
                  if(user) 
                  return Promise.reject('El email ya se encuentra registrado en nuestro sistema')
             })
       }),
      
   
    validator.body('password')
    .notEmpty().withMessage('Tenés que completar el campo de contraseña')
    .isLength({min: 7}).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/^.(?=.{7,})(?=.[a-zA-Z0-9-.]).*$/).withMessage('La contraseña debe tener al menos 8 caracteres'),

    validator.body('password2')
    .notEmpty().withMessage('Tenés que completar el campo de repetir contraseña')
    /* .isLength({min: 7}).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/^.(?=.{7,})(?=.[a-zA-Z0-9-.]).*$/).withMessage('La contraseña debe tener al menos 8 caracteres y una o más letras') */
]

module.exports = validations;