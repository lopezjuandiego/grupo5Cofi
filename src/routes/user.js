const express  = require("express");
const controllers = require('../controllers/user')
const router = express.Router();

router.get('/login', controllers.login)
router.get('/register', controllers.register)
router.get('/profile', controllers.profile)



module.exports = router;