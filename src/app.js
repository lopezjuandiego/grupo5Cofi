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
app.use('/uploads',express.static(path.resolve(__dirname,"../uploads"))) 
app.use(express.urlencoded({extended:true})) //Sirve para interpretar un formulario //
app.use(method("m"))


app.use(require('./routes/home'));
app.use(require('./routes/pagoyenvio'));
app.use(require('./routes/productCart'));
app.use(require('./routes/productDetail'));
app.use(require('./routes/register'));
app.use(require('./routes/login'));
app.use(require('./routes/product'));
app.use("/product", require('./routes/product'));