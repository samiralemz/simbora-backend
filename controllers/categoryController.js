const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const { nome } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Nenhuma imagem foi enviada.' });
    }

    const newCategory = new Category({
      nome,
      image: req.file.filename
    });

    const createdCategory = await newCategory.save();

    res.status(201).json(createdCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a categoria.' });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter as categorias.' });
  }
};
