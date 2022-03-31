const express = require('express');
const router = express.Router();
const user = require("../../controllers/api/user")

router.get('/', user.list);
router.get('/:id', user.showUser);


module.exports = router;