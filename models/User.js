const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    cpf_cnpj: {
        type: String,
        required: false
    },
    telefone: {
        type: String,
        required: false
    },
    imagem: {
        type: String,
        required: false
    },
    AccessLevel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccessLevel',
        required: true,
    },
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

module.exports = User;