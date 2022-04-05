const express = require("express");
const path = require("path");
const session = require('express-session');
const cookie = require('cookie-parser');
const app = express();
const method = require("method-override");
const cors = require('cors');

//CORS
app.use(cors());

//Seteo Server
app.set("port", process.env.PORT || 3050);
app.listen(app.get("port"), () =>
  console.log(
    "Server corriendo en puerto 3050 http://localhost:" + app.get("port")
  )
);

// Configuración View Engine 
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

//Rutas estáticas
app.use(express.static(path.resolve(__dirname, "../public")));
app.use('/uploads',express.static(path.resolve(__dirname,"../uploads"))) 

//URL encode  - Permite la llegada de info de los form al req.body
app.use(express.urlencoded({extended:true})) 

// Habilita el uso de los metodos Put-Delete
app.use(method("m"))

//Session y Cookies
app.use(session({
                  secret:'sprint', 
                  resave: true, 
                  saveUninitialized: false })); 
app.use(cookie()); 

//Middleware user
app.use(require('./middlewares/user'));

//Rutas
app.use(require('./routes/home'));
app.use(require('./routes/pagoyenvio'));
app.use(require('./routes/productCart'));
app.use(require('./routes/productDetail'));
app.use("/product", require('./routes/product'));
app.use("/users", require('./routes/user'));

//Rutas API
app.use('/api/users', require('./routes/api/user'));
app.use('/api/products', require('./routes/api/product'));
