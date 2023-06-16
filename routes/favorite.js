const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

// Rota para favoritar um evento
router.post('/', favoriteController.favoriteEvent);

// Rota para desfavoritar um evento
router.post('/unFavorite', favoriteController.unfavoriteEvent);

// Rota para trazer os eventos favoritados por um usuario
router.get('/byUser/:usuario_id', favoriteController.getFavoriteEvents);

module.exports = router;
