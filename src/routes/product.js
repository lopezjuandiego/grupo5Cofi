const express  = require("express");
const controllers = require('../controllers/product')
const router = express.Router();

router.get('/product', controllers.product)

module.exports = router;