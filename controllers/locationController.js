const Location = require('../models/Location');

// Controlador para criar um novo Local
exports.createLocation = async (req, res) => {
  try {
    const { nome_local, cep, pais, cidade, estado, bairro, logradouro, numero, complemento } = req.body;

    const newLocation = new Location({
      nome_local,
      cep,
      pais,
      cidade,
      estado,
      bairro,
      logradouro,
      numero,
      complemento
    });

    const createdLocation = await newLocation.save();

    res.status(201).json(createdLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o Local.' });
  }
};

// Controlador para obter todos os Locais
exports.getAllLocations = async (req, res) => {
  try {
    const Locations = await Location.find();
    res.status(200).json(Locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os Locais.' });
  }
};

// Controlador para obter um Local pelo ID
exports.getLocationById = async (req, res) => {
  try {
    const Location = await Location.findById(req.params.id);
    if (!Location) {
      return res.status(404).json({ error: 'Local não encontrado.' });
    }
    res.status(200).json(Location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o Local.' });
  }
};

// Controlador para atualizar um Local
exports.updateLocation = async (req, res) => {
  try {
    const { nome_local, cep, pais, cidade, estado, bairro, logradouro, numero, complemento } = req.body;

    // Verifica se o Local existe
    const Location = await Location.findById(req.params.id);
    if (!Location) {
      return res.status(404).json({ error: 'Local não encontrado.' });
    }

    // Atualiza os campos do Local
    Location.nome_local = nome_local;
    Location.cep = cep;
    Location.bairro = bairro;
    Location.logradouro = logradouro;
    Location.cidade = cidade;
    Location.estado = estado;
    Location.pais = pais;
    Location.numero = numero;
    Location.complemento = complemento;

    const updatedLocation = await Location.save();

    res.status(200).json(updatedLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o Local.' });
  }
};

// Controlador para excluir um Local
exports.deleteLocation = async (req, res) => {
  try {
    const Location = await Location.findByIdAndRemove(req.params.id);
    if (!Location) {
      return res.status(404).json({ error: 'Local não encontrado.' });
    }
    res.status(200).json({ message: 'Local excluído com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o Local.' });
  }
};
