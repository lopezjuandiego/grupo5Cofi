const express  = require("express");
const controllers = require('../controllers/home')
const router = express.Router();

router.get('/', controllers.index)

module.exports = router;