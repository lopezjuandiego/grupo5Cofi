const user = require('../models/user');
const validator = require('express-validator');
const bcrypt = require('bcrypt');


module.exports= {


  index: (req,res)  => res.render('users/list', {
    styles: ['login'],
    title: 'LISTADO USUARIOS',
    users: user.get().map
  }),

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
        title: "Registro",
    }),
       

    save: (req, res) =>{ 
      let errors = validator.validationResult(req); 

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
      
    if (req.body.password != req.body.password2){
      return res.render("users/register", {
        styles : ["register"],
        errors: {
          password: {
            msg: "No coinciden las contraseñas",
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

    passwordUpdate: (req,res) => {
    let userToEdit = user.passwordToEdit(req.body);
      return res.redirect("/users/login") //para loguearse con la nueva contraseña, hashear y revalidar
    },
    logout: (req, res) =>{
        delete req.session.user;
        res.cookie('user', null, {maxAge: -1});
        return res.redirect('/users/login');
    },
    uploadAvatar: (req, res) => {
        let update = user.update(req.session.user.id, {avatar: req.files ? req.files[0].filename : null});
        req.session.user = update;
        return res.redirect('/users/profile');
    },
  }

    
