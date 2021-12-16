const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3050);
app.listen(app.get("port"), () =>
  console.log(
    "Server corriendo en puerto 3050 http://localhost:" + app.get("port")
  )
);

app.use(express.static(path.resolve(__dirname, "../public")));
app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
);
app.get("/home", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
);
app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});
app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});

app.get("/pagoyenvio", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/pagoyenvio.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});