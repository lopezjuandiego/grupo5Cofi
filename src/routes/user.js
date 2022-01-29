const express = require('express');
const multer = require('multer');
const path = require('path');
const user = require('../controllers/user');
const save = require('../middlewares/save');
const login = require('../middlewares/login');
const access = require('../middlewares/access');
const router = express.Router();
const storage = multer.diskStorage({ //chequar si cambiamos avatar
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../uploads/avatars')), 
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
});

const upload = multer({storage: storage});

router.get('/login', user.login)
router.get('/register', user.register)
router.get('/profile', ,[access], user.profile)
router.get("/logout",[access], user.logout);

router.post("/save",[save],user.save);
router.post("/access",[login], user.access);
//router.post("/upload/password", user.uploadPassword);
router.post("/upload/avatar",[access,upload.any()],user.uploadAvatar);


module.exports = router;