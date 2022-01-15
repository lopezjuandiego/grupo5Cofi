const express  = require("express");
const controllers = require('../controllers/product')
const path = require ('path');
const multer = require ('multer');
const router = express.Router();
const upload = multer({storage: multer.diskStorage({
    destination: (req,file,cb) => (null, path.resolve (__dirname, '../../uploads')) ,
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now () + path.extname(file.originalname))
})})

router.get('/product', controllers.index)
router.get('/create', controllers.create)

router.post('/product',[upload.any()], controllers.save) 



module.exports = router;