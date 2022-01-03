const express = require("express");
const path = require("path");
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
app.use(express.urlencoded({extended:true})) //Sirve para interpretar un formulario //
app.use(method("m"))


app.use(require('./routes/home'));


app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.ejs"));
});
app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productDetail.ejs"));
});

app.get("/pagoyenvio", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/pagoyenvio.ejs"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.ejs"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.ejs"));
});
