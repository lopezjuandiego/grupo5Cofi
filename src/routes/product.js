const express  = require("express");
const controllers = require('../controllers/product')
const path = require ('path');
const multer = require ('multer');
const access = require('../middlewares/access');
const router = express.Router();
 const upload = multer({storage:multer.diskStorage({
    destination: (req,file,cb) => cb(null, path.resolve (__dirname, '../../uploads')),
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
})}) 


router.get('/', controllers.list)
router.get('/product/create',[access], controllers.create)
router.get('/product/:id',[access],controllers.show)
router.get('/update/:id',[access],controllers.update)
router.post('/product/save',[upload.any()], controllers.save) 
router.put('/:id',[access],controllers.modify) 
router.delete('/delete/:id',controllers.delete)

module.exports = router;