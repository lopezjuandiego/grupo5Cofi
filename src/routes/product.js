const express  = require("express");
const controllers = require('../controllers/product')
const router = express.Router();

router.get('/product', controllers.product)
router.get('/create', controllers.create)
router.get('/save', controllers.save)

module.exports = router;