const user = require('../models/user');
const validator = require('express-validator');

module.exports= {

    login: (req,res)  => res.render('users/login',{
        styles : ["login"],
        title: "Login",
    }),

    access: (req, res) =>{
        const errors = validator.validationResult(req);
        if(errors.isEmpty()){
            req.session.user = user.search('email', req.body.email);
            req.body.remember ? res.cookie('user', req.session.user.email, {maxAge: 1000*60*60*24*7}) : null;
            return res.redirect('/users/profile');
        }else{
            res.render('users/login',{
                errors: errors.mapped(),
                user: req.body
            });
        }
    },

    register: (req,res)  => res.render('users/register' ,{
        styles : ["register"],
        title: "Registro"
    }),

    save: (req, res) =>{
        const errors = validator.validationResult(req)
        if(errors.isEmpty()){
            const create = user.create(req.body);
            res.redirect('/users/login');
        }else{
            return res.render('users/register', {
                errors: errors.mapped(), 
                user: req.body
            });
        }
        //return errors.isEmpty() ? res.send(user.create(req.body)) : res.send(errors.mapped()) ;
    },
    
    profile: (req,res)  => res.render('users/profile',{
        styles : ["product/item"], //chequeamos si este CSS es el que mejor nos funciona
        title: "Perfil / Profile",
    }),
    
    logout: (req, res) =>{
        delete req.session.user;
        res.cookie('user', null, {maxAge: -1});
        return res.redirect('/users/login');
    },
    uploadAvatar: (req, res) => {//chequear cambiar nombre avatar por fotoperdil cuando ande
        let update = user.update(req.session.user.id, {avatar: req.files ? req.files[0].filename : null});
        req.session.user = update;
        return res.redirect('/users/profile');
    }

    }
    
