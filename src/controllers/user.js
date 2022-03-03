const validator = require("express-validator");
//const bcrypt = require("bcrypt");
//const user = require("../models/user");
const path = require('path');
const db = require("../database/models")

module.exports = {

  index: (req, res) => {
    db.User.findAll()
     // include: ['avatarImagen']
    
    
      .then(users => {
        res.render("users/list", {
          styles: ["product/product"],

          title: "USUARIOS REGISTRADOS",
          users: users

        })
      })
      .catch(error => res.send(error))
  },

  login: (req, res) =>{
  db.User.findAll()
  .then (users => {
    res.render("users/login", {
      styles: ["login"],
      title: "Login",
      users: users
    })
    })
    .catch(error => res.send(error))
  },
    access: (req, res) => {
        db.User.findOne({
          where : { email : req.body.email
        }}
        )
          .then(users => {
            let errors = validator.validationResult(req);
            if (!errors.isEmpty()) {
              return res.render("users/login", {
                styles: ["login"],
                errors: errors.mapped(),
              });
            }
            
            //user.search("email", req.body.email); Esto estaba antes
            //probar si funciona esto FindAll + Where
            let exist = db.User.findAll({
              where: {
                email : req.body.email
              }
            }
            )
            
            if (!exist) {
              return res.render("users/login", {
                styles: ["login"],
                errors: {
                  email: {
                    msg: "email sin registrar",
                  },
                },
              });
            }
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
            }   */
        
            if (req.body.remember) {
              res.cookie("email", req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 30 });
            }
            req.session.user = exist;
        
            return res.redirect("/users/profile");
 
          })

          .catch(error => res.send(error))
      },

      register: (req, res) =>{
        db.User.findAll()
        .then (users => {
          res.render("users/register", {
            styles: ["register"],
            title: "Registro",
            users: users
          })
          })
          .catch(error => res.send(error))
        },

   /*    register: (req, res) =>
      res.render("users/register", {
        styles: ["register"],
        title: "Registro",
      }), */

      save: (req, res) => {
db.User.create({
  nombre:req.body.nombre,
  apellido:req.body.apellido,
  email: req.body.email,   
  password: req.body.password,
  //password:bcrypt.hashSync(data.password,10),                             
  avatar: data.avatar ? data.avatar : null,
  admin: req.body.email.includes('@cofi') ? true : false,
})

        let errors = validator.validationResult(req);
    
        if (!errors.isEmpty()) {
          return res.render("users/register", {
            styles: ["register"],
            errors: errors.mapped(),
          });
        }
    
        let exist = user.search("email", req.body.email);
    
        if (exist) {
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
        let userRegistred = user.create(req.body);
        return res.redirect("/users/login");
      },


  /* index: (req, res) =>
      res.render("users/list", {
        styles: ["product/product"],
  
        title: "USUARIOS REGISTRADOS",
        users: user
          .get()
          .map((p) => Object({ ...p, })),
      }),
  
  
      login: (req, res) =>
      res.render("users/login", {
        styles: ["login"],
        title: "Login",
      }),
  

  access: (req, res) => {
    let errors = validator.validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/login", {
        styles: ["login"],
        errors: errors.mapped(),
      });
    }

    let exist = user.search("email", req.body.email);
    if (!exist) {
      return res.render("users/login", {
        styles: ["login"],
        errors: {
          email: {
            msg: "email sin registrar",
          },
        },
      });
    }

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

    if (req.body.remember) {
      res.cookie("email", req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 30 });
    }
    req.session.user = exist;

    return res.redirect("/users/profile");
  },

  
register: (req, res) =>
    res.render("users/register", {
      styles: ["register"],
      title: "Registro",
    }),

  save: (req, res) => {
    let errors = validator.validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/register", {
        styles: ["register"],
        errors: errors.mapped(),
      });
    }

    let exist = user.search("email", req.body.email);

    if (exist) {
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
    let userRegistred = user.create(req.body);
    return res.redirect("/users/login");
  },

  */

  profile: (req, res) =>
    res.render("users/profile", {
      styles: ["profile"],
      title: "Perfil / Profile",
    }),


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
