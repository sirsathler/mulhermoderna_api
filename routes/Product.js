const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController.js');

router.get('/product', ProductController.getProduct);
router.post('/product', ProductController.createProduct);

module.exports = router;