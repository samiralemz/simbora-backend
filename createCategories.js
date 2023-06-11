const mongoose = require('mongoose');
const Category = require('./models/Category');

mongoose.connect('mongodb+srv://samiralemos2016:unifor1227@clustersam.hoeyguw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createCategories() {
  try {
    
    const categories = [
      { nome: "Religioso", descricao: "Eventos religiosos e cerimônias espirituais.", imagem: "categories/imagem_religioso.jpg" },
      { nome: "Cinema", descricao: "Exibições de filmes em salas de cinema.", imagem: "categories/imagem_cinema.jpg" },
      { nome: "Show", descricao: "Apresentações musicais ao vivo com bandas ou artistas.", imagem: "categories/imagem_show.jpg" },
      { nome: "Educativos", descricao: "Eventos com foco em aprendizado e conhecimento.", imagem: "categories/imagem_educativos.jpg" },
      { nome: "Infantil", descricao: "Eventos voltados para crianças e atividades recreativas.", imagem: "categories/imagem_infantil.jpg" },
      { nome: "Conferências", descricao: "Eventos onde especialistas compartilham conhecimento e experiências.", imagem: "categories/imagem_conferencia.jpg" },
      { nome: "Exposições", descricao: "Mostras de arte, fotografia ou outros tipos de exposições culturais.", imagem: "categories/imagem_exposicao.jpg" },
      { nome: "Festivais", descricao: "Celebrações culturais com música, comida, dança e diversão.", imagem: "categories/imagem_festival.jpg" },
      { nome: "Teatro", descricao: "Espetáculos teatrais com atores e encenações de peças.", imagem: "categories/imagem_teatro.jpg" },
      { nome: "Balada", descricao: "Eventos noturnos com música e dança.", imagem: "categories/imagem_balada.jpg" }
    ];

    const createdCategories = await Category.create(categories);

    console.log('Categorias criadas com sucesso:', createdCategories);
  } catch (error) {
    console.error('Erro ao criar as Categorias:', error);
  } finally {
    mongoose.connection.close();
  }
}

createCategories();