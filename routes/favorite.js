const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

// Rota para favoritar um evento
router.post('/', favoriteController.favoriteEvent);

// Rota para desfavoritar um evento
router.delete('/', favoriteController.unfavoriteEvent);

module.exports = router;
