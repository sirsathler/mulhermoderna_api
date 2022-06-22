const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController.js');
const authMiddleware = require('../middlewares/auth');

router.get('/product', authMiddleware.authenticateUser, ProductController.getProduct);
router.post('/product', ProductController.createProduct);

module.exports = router;