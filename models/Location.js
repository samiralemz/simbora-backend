const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  pais: {
    type: String,
    required: true
  },
  publico_estimado: {
    type: Number,
    required: true
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
