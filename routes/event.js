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

// Rota para obter um evento pelo ID
router.get('/:id', eventController.getEventById);

// Rota para atualizar um evento
router.put('/:id', upload.single('imagem'), eventController.updateEvent);

// Rota para excluir um evento
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
