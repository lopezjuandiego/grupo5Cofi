const express  = require("express");
const controllers = require('../controllers/product')
const path = require ('path');
const multer = require ('multer');
const access = require('../middlewares/access');
const create = require('../middlewares/create');
const router = express.Router();
 const upload = multer({storage:multer.diskStorage({
    destination: (req,file,cb) => cb(null, path.resolve (__dirname, '../../uploads')),
    filename: (req, file, cb) =>  cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))           
})}) 



router.get('/', controllers.list)
router.get('/create',[access], controllers.create)
router.get('/search/', controllers.search)
router.get('/:id',[access],controllers.show)
router.get('/edit/:id',[access],controllers.edit)
router.post('/save',upload.any(),[create], controllers.save) 
router.put('/update/:id',[access],controllers.update) 
router.delete('/delete/:id',controllers.delete)

module.exports = router;