const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { nome, email, senha, nivelAcesso, cpf_cnpj, telefone, sobrenome } = req.body;

    // nivelAcessoId
    // 646e9089daa015d12e6b3647 produtor
    // 646e9089daa015d12e6b3648 cliente
    const newUser = new User({
      nome,
      sobrenome,
      email,
      senha,
      nivelAcesso,
      imagem: req?.file?.filename ?? null,
      cpf_cnpj,
      telefone
    });

    const createdUser = await newUser.save();

    res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o usuário.' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os usuários.' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o usuário.' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { nome, email, senha, cpf_cnpj, telefone, sobrenome } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Atualiza os campos do usuário
    user.nome = nome;
    user.email = email;
    user.senha = senha;
    user.telefone = telefone;
    user.cpf_cnpj = cpf_cnpj;
    user.sobrenome = sobrenome;

    if (req.file) {
      user.imagem = req.file.filename;
    }

    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.status(200).json({ message: 'Usuário excluído com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o usuário.' });
  }
};
