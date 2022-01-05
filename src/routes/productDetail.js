const express  = require("express");
const controllers = require('../controllers/productDetail')
const router = express.Router();

router.get('/productDetail', controllers.productDetail)

module.exports = router;