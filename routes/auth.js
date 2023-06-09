const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


// Rota para realizar o login
router.post('/login', authController.login);

// Rota para realizar o login do Produtor
router.post('/login-produtor', authController.loginProdutor);

module.exports = router;
