const user = require('../models/user');
const validator = require('express-validator');
const bcrypt = require('bcrypt');


module.exports= {

    login: (req,res)  => res.render('users/login',{
        styles : ["login"],
        title: "Login",
    }),

    access: (req, res) =>{
    
       
        let errors = validator.validationResult(req); 

        if (!errors.isEmpty()) {
          return res.render("users/login", {
            styles : ["login"],
            errors: errors.mapped() 
          });
        }
    
    
        let exist = user.search("email", req.body.email);
        if (!exist) {
          return res.render("users/login", {
            styles : ["login"],
            errors: {
              email: {
                msg: "email sin registrar",
              }
            }
          })
        }
    
        if (!bcrypt.compareSync(req.body.password, exist.password)){ 
          return res.render("users/login", {
            styles : ["login"],
            errors: {
              password: {
                msg: "Contraseña invalida",
              }
            }
          })
        }
    
        if(req.body.remember){
            res.cookie("email",req.body.email,{maxAge:1000*60*60*24*30})
        }
        req.session.user = exist
    
        return res.redirect ("/users/profile") 
    

    },

    register: (req,res)  => res.render('users/register' ,{
        styles : ["register"],
        title: "Registro"
    }),

    save: (req, res) =>{ 
      let errors = validator.validationResult(req); //trae los errores del resultado de las validciones

      if (!errors.isEmpty()) {
        return res.render("users/register", {
          styles : ["register"],
          errors: errors.mapped() 
        })
      }
  
      let exist = user.search("email", req.body.email);
  
      if (exist) {
        return res.render("users/register", {
          styles : ["register"],
          errors: {
            email: {
              msg: "email ya registrado",
            },
          },
        });
      }
  
      let userRegistred = user.create(req.body);
  
      return res.redirect("/users/login")
    },
    
    profile: (req,res)  => res.render('users/profile',{
        styles : ["profile"], 
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
    
