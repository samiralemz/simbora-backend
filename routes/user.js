const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Rota para obter todos os usuários
router.get('/', userController.getAllUsers);

// Rota para obter um usuário por ID
router.get('/:id', userController.getUserById);

// Rota para criar um novo usuário
router.post('/', upload.single('imagem'), userController.createUser);

// Rota para atualizar um usuário, incluindo a imagem
router.put('/:id', upload.single('imagem'), userController.updateUser);

// Rota para excluir um usuário
router.delete('/:id', userController.deleteUser);


module.exports = router;
