const express = require("express");
const path = require("path");
const session = require('express-session');
const cookie = require('cookie-parser');
const app = express();
const method = require("method-override");

app.set("port", process.env.PORT || 3050);
app.listen(app.get("port"), () =>
  console.log(
    "Server corriendo en puerto 3050 http://localhost:" + app.get("port")
  )
);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));


app.use(express.static(path.resolve(__dirname, "../public")));
app.use('/uploads',express.static(path.resolve(__dirname,"../uploads"))) 
app.use(express.urlencoded({extended:true})) 
app.use(method("m"))

app.use(session({
                  secret:'sprint', 
                  resave: true, 
                  saveUninitialized: false })); 
app.use(cookie()); 

app.use(require('./middlewares/user'));


app.use(require('./routes/home'));
app.use(require('./routes/pagoyenvio'));
app.use(require('./routes/productCart'));
app.use(require('./routes/productDetail'));
app.use(require('./routes/product'));//sacamos linea y se rompe
app.use("/product", require('./routes/product'));
app.use("/users", require('./routes/user'));

