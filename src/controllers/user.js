const validator = require("express-validator");
const bcrypt = require("bcrypt");
//const user = require("../models/user"); 
const path = require('path');
const db = require("../database/models")

module.exports = {

 list: (req, res) => {
    db.User.findAll()
        .then(users => {
          res.render("users/list", {
            styles: ["product/product"],
      
            title: "USUARIOS REGISTRADOS",
            users: users
              
          })
        })
},

login: (req, res) =>
res.render("users/login", {
  styles: ["login"],
  title: "Login",
}),
 

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
        
      })
     } if (!users) {
        return res.render("users/login", {
          styles: ["login"],
          errors: {
            email: {
              msg: "Email sin registrar",
            },
          },
          
        })
         
   }    

   if (!bcrypt.compareSync(req.body.password, users.password)) {
      return res.render("users/login", {
        styles: ["login"],
        errors: {
          password: {
            msg: "Contraseña invalida",
          },
        },
      });

    } else {
               
      if (req.body.remember) {
        res.cookie("email", req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 30 })
      }
      req.session.user = users
      return res.redirect("/users/profile")
      
        }  
      })

      .catch(error => res.send(error))
   
  },
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
              password:bcrypt.hashSync(req.body.password,10),
              password2: req.body.password2,
              admin: req.body.email.includes('@cofi') ? true : false,
              avatar: req.body.avatar ? req.body.avatar : null,
    })
    
    .then(users => {
                          
    let errors = validator.validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/register", {   
        styles: ["register"],
        errors: errors.mapped(),
      });
    }
     
    if (!users) {
      return res.render("users/register", {
        styles: ["register"],
        errors: {
          email: {
            msg: "email ya registrado",
          },
        },
      });
    } 


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

      

      return res.redirect('/users/login')
     
    

    //let userRegistred = user.create(req.body);       
   
  })
  .catch(error => res.send(error))
  
  },

   profile: (req,res) => {

     
          res.render('users/profile',{
          styles: ["profile"],
          title: "Perfil /" + req.body.nombre,
          
        })

      },
    
   
    showUser: (req,res) => {
      db.User.findByPk(req.params.id)

      .then(users =>
        
        {let result = db.User.findOne({
        where: {
          email : req.cookies && req.cookies.user ?  req.cookies.user : null
        }})
      return result ? res.render("users/profile",{
        styles:["profile"],                      
        title: 'Usuario: '+ users.nombre, 
        user: users,
      }) 
      : 
      res.render ('error',{
      msg: 'Usuario inexistente'
  }) 
  
})
.catch(error => res.send(error))
    
    },

    edit: (req, res) => {

      db.User.findByPk(req.params.id)
      .then(users => {
        res.render('users/ #',{users:users})
      })
    },

    update: (req, res) =>{
      
      db.User.update({

        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,       
        admin: req.body.email.includes('@cofi') ? true : false,
      },{
        where:{
          id: req.params.id
        }
      })
      
      res.redirect('/users/edit' + req.params.id)
    },
   
    delete: (req,res) => {

      db.User.destroy({
        where: {
          id: req.params.id
        }
      })
      res.redirect('/users/list')
    },

  logout: (req, res) => {
    delete req.session.user;
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/users/login");
  },
  uploadAvatar: (req, res) => {
    let update = db.User.findAll(req.session.user.id, {
      include : ["avatarImagen"],
      avatar: req.files ? req.files[0].filename : null,
    });
    req.session.user = update;
    return res.redirect("/users/profile");
  },
};
