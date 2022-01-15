const express  = require("express");
const controllers = require('../controllers/product')
const path = require ('path');

const router = express.Router();


router.get('/product', controllers.product)
router.get('/create', controllers.create)
router.post('/',controllers.save) 



module.exports = router;