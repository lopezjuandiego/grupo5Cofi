const express  = require("express");
const controllers = require('../controllers/product')
const path = require ('path');
const multer = require ('multer');
const router = express.Router();
 const upload = multer({storage:multer.diskStorage({
    destination: (req,file,cb) => cb(null, path.resolve (__dirname, '../../uploads')),
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
})}) 


router.get('/', controllers.index)
router.get('/product/create', controllers.create)
router.get('/product/:id',controllers.show)

router.get('/update/:id',controllers.update)
router.put('/:id',controllers.modify) 

router.post('/',[upload.any()], controllers.save) 


router.delete ('/',controllers.delete)

module.exports = router;