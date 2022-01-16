const express  = require("express");
const controllers = require('../controllers/product')
const path = require ('path');
const multer = require ('multer');
const router = express.Router();
 const upload = multer({storage:multer.diskStorage({
    destination: (req,file,cb) => (null, path.resolve (__dirname, '../../uploads')),
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
})}) 
/*const storage = multer.diskStorage({
    destination: (req,file,cb) => (null, path.resolve (__dirname, '../../uploads')),
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now () + path.extname(file.originalname))
})

const upload = multer({storage:storage}) */

router.get('/', controllers.index)
router.get('/create', controllers.create)
router.get('/update/:id',controllers.update)
router.get('/products/:id',controllers.show)

router.post('/',[upload.any()], controllers.save) 

router.put('/modify/:id',controllers.modify)
router.delete ('/',controllers.delete)

module.exports = router;