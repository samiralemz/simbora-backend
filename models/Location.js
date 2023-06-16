const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  nome_local: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    require: true
  },
  pais: {
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
  bairro: {
    type: String
  },
  logradouro: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    required: true
  },
  complemento: {
    type: String
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
