const express  = require("express");
const controllers = require('../controllers/pagoyenvio')
const router = express.Router();

router.get('/pagoyenvio', controllers.pagoyenvio)

module.exports = router; 