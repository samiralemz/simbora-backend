const mongoose = require('mongoose');
const AccessLevel = require('./models/AccessLevel');

mongoose.connect('mongodb+srv://samiralemos2016:unifor1227@clustersam.hoeyguw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createAccessLevels() {
  try {
    const accessLevels = [
      { nome: 'Produtor', descricao: 'Acesso ao sistema do Produtor' },
      { nome: 'Cliente', descricao: 'Acesso ao sistema do Cliente' },
    ];

    const createdAccessLevels = await AccessLevel.create(accessLevels);

    console.log('Níveis de acesso criados com sucesso:', createdAccessLevels);
  } catch (error) {
    console.error('Erro ao criar os níveis de acesso:', error);
  } finally {
    mongoose.connection.close();
  }
}

createAccessLevels();
