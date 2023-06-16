const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');


// Rota para criar um Local
router.post('/', locationController.createLocation);

// Rota para obter todos os locais
router.get('/', locationController.getAllLocations);

// Rota para obter um local pelo ID
router.get('/:id', locationController.getLocationById);

module.exports = router;
