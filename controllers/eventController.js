const Event = require('../models/Event');

// Controlador para criar um novo evento com upload de imagem
exports.createEvent = async (req, res) => {
  try {
    const { titulo, descricao, categoria, locais, horario_inicio, horario_fim, data, tags, publico_estimado, usuario_id } = req.body;

    // Verifica se foi feito o upload de uma imagem
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhuma imagem foi enviada.' });
    }

    const newEvent = new Event({
      titulo,
      descricao,
      imagem: req.file.filename ?? null,
      categoria,
      locais,
      horario_inicio,
      horario_fim,
      data,
      tags,
      publico_estimado,
      usuario_id
    });

    const createdEvent = await newEvent.save();

    res.status(201).json(createdEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o evento.' });
  }
};

// Controlador para obter todos os eventos
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os eventos.' });
  }
};

exports.searchEventsByKeyword = async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const events = await Event.find({
      $text: { $search: keyword }
    });
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar eventos.' });
  }
};

// Controlador para obter todos os eventos
exports.getAllEventsAutoComplete = async (req, res) => {
  try {
    const events = await Event.find();
    const eventNames = events.map(event => event.titulo);
    res.status(200).json(eventNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os eventos.' });
  }
};

// Controlador para obter um evento pelo ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('locais');
    if (!event) {
      return res.status(404).json({ error: 'Evento não encontrado.' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o evento.' });
  }
};


// Controlador para atualizar um evento
exports.updateEvent = async (req, res) => {
  try {
    const { titulo, descricao, categoria, locais, horario_inicio, horario_fim, data, tags, publico_estimado } = req.body;

    // Verifica se o evento existe
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Evento não encontrado.' });
    }

    // Atualiza os campos do evento
    event.titulo = titulo;
    event.descricao = descricao;
    event.categoria = categoria;
    event.locais = locais;
    event.horario_inicio = horario_inicio;
    event.horario_fim = horario_fim;
    event.data = data;
    event.tags = tags;
    event.publico_estimado = publico_estimado;

    // Verifica se foi feito o upload de uma nova imagem
    if (req.file) {
      event.imagem = req.file.filename;
    }

    const updatedEvent = await event.save();

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o evento.' });
  }
};

// Controlador para excluir um evento
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndRemove(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Evento não encontrado.' });
    }
    res.status(200).json({ message: 'Evento excluído com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o evento.' });
  }
};

// Rota para buscar eventos por usuario_id
exports.getEventsByUserId = async (req, res) => {
  try {
    const { usuario_id } = req.params;

    // Busca os eventos pelo usuario_id e ordena por ordem crescente de ID
    const events = await Event.find({ usuario_id }).sort({ _id: 'desc' });

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os eventos.' });
  }
};



// Rota para buscar eventos por categoria_id
exports.getEventsByCategoryId = async (req, res) => {
  try {
    const { categoria } = req.params;

    // Busca os eventos pelo categoria
    const events = await Event.find({ categoria });

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os eventos.' });
  }
};
