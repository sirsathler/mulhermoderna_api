const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController.js');
const authMiddleware = require('../middlewares/Auth');

router.get('/product', authMiddleware.authenticateUser, productController.getProduct);
router.post('/product', productController.createProduct);

module.exports = router;