const express  = require("express");
const controllers = require('../controllers/productCart')
const router = express.Router();

router.get('/productCart', controllers.productCart)

module.exports = router;