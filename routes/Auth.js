const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController.js');

router.post('/login', AuthController.Login);

module.exports = router;