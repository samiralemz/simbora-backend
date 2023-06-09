const express = require('express');
const router = express.Router();
const multer = require('multer');
const eventController = require('../controllers/eventController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Rota para criar um evento
router.post('/', upload.single('imagem'), eventController.createEvent);

// Rota para obter todos os eventos
router.get('/', eventController.getAllEvents);

// Rota para obter todos os eventos como array
router.get('/autocomplete', eventController.getAllEventsAutoComplete);

// Rota para obter todos os eventos de uma pesquisa
router.get('/search/:keyword', eventController.searchEventsByKeyword);

// Rota para obter um evento pelo ID
router.get('/:id', eventController.getEventById);

// Rota para atualizar um evento
router.put('/:id', upload.single('imagem'), eventController.updateEvent);

// Rota para excluir um evento
router.delete('/:id', eventController.deleteEvent);

// Rota para buscar eventos por usuario_id
router.get('/usuario/:usuario_id', eventController.getEventsByUserId);

// Rota para buscar eventos por categoria_id
router.get('/categoria/:categoria', eventController.getEventsByCategoryId);

module.exports = router;
