const mongoose = require('mongoose');

const accessLevelSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
    },
    descricao: {
        type: String,
        required: true,
    },
});

const AccessLevel = mongoose.model('AccessLevel', accessLevelSchema);

module.exports = AccessLevel;
