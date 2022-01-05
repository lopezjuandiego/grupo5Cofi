const express  = require("express");
const controllers = require('../controllers/register')
const router = express.Router();

router.get('/register', controllers.register)

module.exports = router;