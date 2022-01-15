const express  = require("express");
const controllers = require('../controllers/product')
const path = require ('path');
const multer = require ('multer');
const router = express.Router();

router.get('/product', controllers.index)
router.get('/create', controllers.create)
router.get('/create', controllers.save) 



module.exports = router;