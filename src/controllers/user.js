const validator = require("express-validator");
const bcrypt = require("bcrypt");
const path = require('path');
const db = require("../database/models");
const Op = db.Sequelize.Op

module.exports = {

  //LISTADO DE USUARIOS
  list: (req, res) => {
    db.User.findAll({
      include: ['avatars']
    })
      .then(users => {
        res.render("users/list", {
          styles: ["userList"],
          title: "USUARIOS REGISTRADOS",
          users: users
        })
      })
  },

//LOGIN DE USUARIOS
  login: (req, res) =>
    res.render("users/login", {
      styles: ["login"],
      title: "Login",
    }),

  access: (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email
      },
      //include : ['avatars']
    })
      .then(users => {
        console.log(users)
        let errors = validator.validationResult(req);

        if (!errors.isEmpty()) {
          res.render("users/login", {
            styles: ["login"],
            errors: errors.mapped(),
            oldData: req.body
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
        }
        if (req.body.remember) {
          res.cookie("email", req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 7 })
        }
        req.session.user = users
        return res.redirect("/users/profile")
      })
      .catch(error => res.send(error))
  },

  //REGISTRO DE USUARIOS
  register: (req, res) =>
    res.render("users/register", {
      styles: ["register"],
      title: "Registro",
    }),

  save: (req, res) => {
    let errors = validator.validationResult(req);
    if (errors.isEmpty()) {
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
      db.User.create({
        id: req.body.id,
        nombre: req.body.nombre.trim(),
        apellido: req.body.apellido.trim(),
        email: req.body.email.trim(),
        password: bcrypt.hashSync(req.body.password, 10),
        admin: req.body.email.includes('@cofi') ? true : false,
        avatar: req.body.avatar,
      })
        .then(() => res.redirect('/users/login'))
        .catch(error => res.send(error))
    } else {
      return res.render("users/register", {
        styles: ["register"],
        errors: errors.mapped(),
        oldData: req.body,
      });
    }
  },

  //MOSTRAR USUARIO
  profile: (req, res) => {
    db.User.findByPk(req.session.user.id, {
      include: ['avatars']
    })
      .then(user => {
        res.render('users/profile', {
          styles: ["profile"],
          title: "Perfil /" + req.body.nombre,
          user: user
        })
      })
  },

  showUser: (req, res) => {
    db.User.findByPk(req.params.id, { include: ['avatars'] })

      .then(users => {
        let result = db.User.findOne({
          where: {
            email: req.cookies && req.cookies.user ? req.cookies.user : null
          }
        })
        return result ? res.render("users/profile", {
          styles: ["profile"],
          title: 'Usuario: ' + users.nombre,
          user: users,
        }) : res.render('error', {
            msg: 'Usuario inexistente'
          })
      })
      .catch(error => res.send(error))
  },


// EDITAR USUARIO
  edit: (req, res) => {
    db.User.findByPk(req.params.id)
      .then(users => {
        res.render('users/userUpdate', {
          styles: ["userUpdate"],
          title: 'Usuario: ' + users.nombre,
          users: users
        })
      })
      .catch(error => res.send(error))
  },

  update: (req, res) => {
    db.User.update({
      nombre: req.body.nombre.trim(),
      apellido: req.body.apellido.trim(),
      email: req.body.email.trim(),
    }, {
      where: {
        id: req.params.id
      }
    })
    res.redirect('/users/index')
  },

  //ELIMINAR USUARIO
  delete: (req, res) => {
    db.User.findByPk(req.params.id)
      .then((user) => {
        db.User.destroy({
          where: {
            id: user.id
          }
        })
          .then(respuesta => {
            db.Imagen.destroy({
              where: {
                id: user.avatar,
              },
            })
              .then(() => {
                res.redirect('/users/index')
              })
              .catch((error) => res.send(error));
          })
          .catch((error) => res.send(error));
      })
      .catch((error) => res.send(error));

  },

  //DESLOGEO DE USUARIO
  logout: (req, res) => {
    delete req.session.user;
    res.cookie("email", null, { maxAge: -1 });
    return res.redirect("/users/login");
  },

//SUBIR FOTO DE USUARIO
  uploadAvatar: (req, res) => {
    let errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("users/profile", {
        styles: ["profile"],
        errors: errors.mapped(),
      })
    }
    if (req.files && req.files.length > 0) {
      db.Imagen.create({
        Url:
          req.files[0].filename, Type: 2
      })
        .then(imagen => {
          db.User.update({ avatar: imagen.id }, {
            where: {
              id: req.session.user.id
            }
          })
            .then(update => {
              (req.session.user.id)

            })
            .then(user => {
              req.session.user = user
            })
          return res.redirect('/users/index')
        })
        .catch((error) => res.send(error));
    }
  },

  //BUSCAR USUARIO
  search: (req, res) => {
    db.User.findAll(
      {
        where: {
          [Op.or]: [
            {
              nombre: {
                [Op.like]: "%" + req.query.buscar + "%"
              }
            },
            {
              apellido: {
                [Op.like]: "%" + req.query.buscar + "%"
              }
            }
          ]
        }
      }
    )
      .then(users => {
        res.render('users/search', {
          styles: ["profile"],
          title: 'Resultado',
          users: users
        })
      })
      .catch((error) => res.send(error));
  }
}
