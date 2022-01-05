const express  = require("express");
const controllers = require('../controllers/login')
const router = express.Router();

router.get('/login', controllers.login)

module.exports = router;