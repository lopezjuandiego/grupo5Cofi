const express = require('express');
const multer = require('multer');
const path = require('path');
const user = require('../controllers/user');
const save = require('../middlewares/save');
const login = require('../middlewares/login');
const access = require('../middlewares/access');
const validationAvatar = require('../middlewares/validationAvatar');
const router = express.Router();
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../uploads/avatars')), 
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
});

const upload = multer({storage: storage});


router.get('/login', user.login)
router.get('/register', user.register)
router.get('/index', user.list)
router.get('/search/', user.search)
router.get('/profile',[access], user.profile)
router.get('/profile/:id',[access],user.showUser) 
router.get('/update/:id',[access],user.edit)



router.post("/logout", user.logout)
router.post("/save",[save],user.save);
router.post("/access",[login], user.access); 
router.post("/upload/avatar",[access,upload.any()], [validationAvatar], user.uploadAvatar); 
router.put("/update/:id", [access],user.update)
router.delete('/delete/:id', user.delete);


module.exports = router;