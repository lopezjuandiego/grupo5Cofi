const validator = require("express-validator");
const bcrypt = require("bcrypt");
const user = require("../models/user"); 
//Comentar a futuro. No estoy tan seguro que haya q borrarlo porque acá esta el hasheo del pass

const path = require('path');
//const db = require('../database/models');
//const sequelize = db.sequelize;
//const { Op } = require("sequelize");

 //Aqui dispongo las rutas para trabajar con el CRUD
/*
 const userDb = {
//REVISAR ADD
  add: function (req, res) {
  let tablaImagen = Imagen.findAll();
  
  Promise
  .all([tablaImagen])
  .then((imagenes) => {
      return res.render(path.resolve(__dirname, '..', 'views',  'register'), {imagenes})})
  .catch(error => res.send(error))
}, 
create: function (req,res) {
  db.User
  .create(
      {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
          admin: req.body.admin
      }
  )
  .then(()=> {
      return res.redirect('/login')})            
  .catch(error => res.send(error))
},
edit: function(req,res) {
  let movieId = req.params.id;
  let promMovies = Movies.findByPk(movieId,{include: ['genre','actors']});
  let promGenres = Genres.findAll();
  let promActors = Actors.findAll();
  Promise
  .all([promMovies, promGenres, promActors])
  .then(([Movie, allGenres, allActors]) => {
      //Movie.release_date = moment( new Date(Movie.release_date)).toLocaleDateString();
      Movie.release_date = moment( new Date(Movie.release_date)).format('L');
      //new Date("Sun Jan 03 1999 21:00:00 GMT-0300 (hora estándar de Argentina)").toLocaleDateString()
      //return res.send(Movie.release_date);
      return res.render(path.resolve(__dirname, '..', 'views',  'moviesEdit'), {Movie,allGenres,allActors})})
  .catch(error => res.send(error))
},
update: function (req,res) {
  let movieId = req.params.id;
  Movies
  .update(
      {
          title: req.body.title,
          rating: req.body.rating,
          awards: req.body.awards,
          release_date: req.body.release_date,
          length: req.body.length,
          genre_id: req.body.genre_id
      },
      {
          where: {id: movieId}
      })
  .then(()=> {
      return res.redirect('/movies')})            
  .catch(error => res.send(error))
},
delete: function (req,res) {
  let movieId = req.params.id;
  Movies
  .findByPk(movieId)
  .then(Movie => {
      return res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {Movie})})
  .catch(error => res.send(error))
},
destroy: function (req,res) {
  let movieId = req.params.id;
  Movies
  .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
  .then(()=>{
      return res.redirect('/movies')})
  .catch(error => res.send(error)) 
},

'list': (req, res) => {
  db.Movie.findAll({
      include: ['genre']
  })
      .then(movies => {
          res.render('moviesList.ejs', {movies})
      })
},
'detail': (req, res) => {
  db.Movie.findByPk(req.params.id,
      {
          include : ['genre']
      })
      .then(movie => {
          res.render('moviesDetail.ejs', {movie});
      });
},

}

module.exports = userDb;




/*     'list': (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            include: ['genre'],
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    },
 */   









/* VERSION VIEJA DE CRUD 
module.exports = {
  index: (req, res) =>
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

  profile: (req, res) =>
    res.render("users/profile", {
      styles: ["profile"],
      title: "Perfil / Profile",
    }),

   
  showUser: (req,res) => {
        
      let result = user.search ('id', req.params.id)
          return result ? res.render("users/profile",{
          styles:["profile"],                      
          title: 'Usuario: '+ result.email, 
          user: result }) 
       : 
        res.render ('error',{
        msg: 'Usuario inexistente'
    })     
  },

  /* 
 EDITAR PASSWORD
    passwordUpdate: (req,res) => {
    let userToEdit = user.passwordEdit(req.body,
       //para loguearse con la nueva contraseña, hashear y revalidar
    )}, 

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
 */