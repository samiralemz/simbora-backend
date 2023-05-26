const express = require('express');
const router = express.Router();
const multer = require('multer');
const categoryController = require('../controllers/categoryController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Rota para criar uma categoria
router.post('/', upload.single('image'), categoryController.createCategory);

// Rota para obter todas as categorias
router.get('/', categoryController.getAllCategories);

module.exports = router;
