const User = require('../models/user');

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verificar se o usuário existe no banco de dados
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    if (user.AccessLevel === 'produtor') {
      return res.status(401).json({ message: 'Usuário Não Cliente!' });
    }

    // Verificar a senha
    const isMatch = senha === user.senha;
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar o login' });
  }
};

exports.loginProdutor = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verificar se o usuário existe no banco de dados
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    if (user.AccessLevel === 'cliente') {
      return res.status(401).json({ message: 'Usuário Não Produtor!' });
    }

    // Verificar a senha
    const isMatch = senha === user.senha;
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar o login' });
  }
};



