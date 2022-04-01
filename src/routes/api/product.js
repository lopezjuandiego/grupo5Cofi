const express = require('express');
const router = express.Router();
const product = require("../../controllers/api/product")

router.get('/', product.list);
router.get('/:id', product.showProduct);


module.exports = router;