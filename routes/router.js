const express = require('express');
const router = express.Router();

const userRoutes = require('../routes/user');
const eventRoutes = require('../routes/event');
const categoryRoutes = require('../routes/category');
const favoriteRoutes = require('../routes/favorite');
const authRoutes = require('../routes/auth');



// Rotas relacionadas a usuários
router.use('/users', userRoutes);

// Rotas relacionadas a autenicaçao
router.use('/auth', authRoutes);

// Rotas relacionadas a eventos
router.use('/event', eventRoutes);

// Rotas relacionadas a categorias
router.use('/category', categoryRoutes);

// Rotas relacionadas ao favoritar
router.use('/favorite', favoriteRoutes);


module.exports = router;
