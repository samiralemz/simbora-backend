const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String
  },
  imagem: {
    type: String
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;