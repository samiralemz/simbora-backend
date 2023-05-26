const express = require("express")
const cors = require("cors")
const path = require('path');
const app = express()

app.use(cors())

app.use(express.json())

//Conexão com o banco
const conn = require("./db/conn");

conn();

const routes = require('./routes/router');

app.use('/api', routes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(3000, function () {
    console.log("Servidor online!")
})
