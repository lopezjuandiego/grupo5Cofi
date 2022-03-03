const validator = require("express-validator");
const bcrypt = require("bcrypt");
//const user = require("../models/user"); 
const path = require('path');
const db = require("../database/models")

module.exports = {

 index: (req, res) => {
    db.User.findAll()
        .then(users => {
          res.render("users/list", {
            styles: ["product/product"],
      
            title: "USUARIOS REGISTRADOS",
            users: users
              
          })
        })
},

    login: (req,res) => {
      db.User.findAll()
      .then(users => {
        res.render('users/login',{
          styles: ["login"],
          title: "Login",
          users: users
        })

      })
    },
 
  access: (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(users => {      
    
    let errors = validator.validationResult(req);

    if (!errors.isEmpty()) {
       res.render("users/login", {
        styles: ["login"],
        errors: errors.mapped(),
        
      });
      if (!users) {
        return res.render("users/login", {
          styles: ["login"],
          errors: {
            email: {
              msg: "Email sin registrar",
            },
          },
          
        });
    }//revisar llave
      
    } else {

     
    
    if (req.body.remember) {
      res.cookie("email", req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 30 });
    }
    req.session.user = users;
    res.redirect("/users/profile");
      }  })
  },

   /* 

   if (!bcrypt.compareSync(req.body.password, exist.password)) {
      return res.render("users/login", {
        styles: ["login"],
        errors: {
          password: {
            msg: "Contraseña invalida",
          },
        },
      });
    }

    */
   

register: (req, res) =>
    res.render("users/register", {
      styles: ["register"],
      title: "Registro",
    }),


  save: (req, res) => {
    db.User.create({
              id: req.body.id,
              nombre: req.body.nombre,
              apellido: req.body.apellido,
              email: req.body.email,
              password: req.body.password.bcrypt.hashSync(data.password,10),
              //password2: req.body.password2,
              admin: req.body.email.includes('@cofi') ? true : false,
    })
    .then(()=> {
          return res.redirect('/login')})            
      

    let errors = validator.validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/register", {   
        styles: ["register"],
        errors: errors.mapped(),
      });
    }

    /* let exist = user.search("email", req.body.email);

    if (exist) {
      return res.render("users/register", {
        styles: ["register"],
        errors: {
          email: {
            msg: "email ya registrado",
          },
        },
      });
    } */

    if (req.body.password != req.body.password2) {
      return res.render("users/register", {
        styles: ["register"],
        errors: {
          password: {
            msg: "Las contraseñas no coinciden",
          },
        },
      });
    }
 /*    let userRegistred = user.create(req.body);
    return res.redirect("/users/login"); */
  
  },

   profile: (req,res) => {
      db.User.findAll()
      .then(users => {
        res.render('users/profile',{
          styles: ["profile"],
          title: "Perfil / Profile",
          users: users
        })

      })
    },
   
    showUser: (req,res) => {
      db.User.findByPk(req.params.id)
      .then(users => {
        res.render('users/profile',{
          styles: ["profile"],
          title: 'Usuario: '+ result.email,
          users: users
        })

      })
    },
 /* showUser: (req,res) => {
        
      let result = user.search ('id', req.params.id)
          return result ? res.render("users/profile",{
          styles:["profile"],                      
          title: 'Usuario: '+ result.email, 
          user: result }) 
       : 
        res.render ('error',{
        msg: 'Usuario inexistente'
    })     
  }, */

  showUser: (req, res) => {

    let result = user.search('id', req.params.id)
    return result ? res.render("users/profile", {
      styles: ["profile"],
      title: 'Usuario: ' + result.email,
      user: result
    })
      :
      res.render('error', {
        msg: 'Usuario inexistente'
      })
  },
/*no lo hicimos andar 
  passwordUpdate: (req, res) => {
    let userToEdit = user.passwordEdit(req.body,
      //para loguearse con la nueva contraseña, hashear y revalidar
    )
  },
*/

  logout: (req, res) => {
    delete req.session.user;
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/users/login");
  },
  uploadAvatar: (req, res) => {
    let update = user.update(req.session.user.id, {
      avatar: req.files ? req.files[0].filename : null,
    });
    req.session.user = update;
    return res.redirect("/users/profile");
  },
};
