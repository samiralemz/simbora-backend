const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  imagem: {
    type: String
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  locais: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  }],
  horario_inicio: {
    type: String,
    required: true
  },
  horario_fim: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: true
  },
  tags: [String]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
