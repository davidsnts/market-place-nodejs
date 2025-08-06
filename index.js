const express = require('express');
const connectToDatabase = require('./src/database/database'); //arquivo de conexão com o banco
require('dotenv').config(); //variaveis de ambiente
const app = express();
const usuario = require('./src/router/usuario.router'); //arquivo de rota do usuário
const produto = require('./src/router/produto.router'); //arquivo de rota do produto
const auth = require('./src/router/auth.router'); //arquivo de rota do usuário


const PORT = 3001;

app.use(express.json());

connectToDatabase(); //Conctando com o banco

app.use("/usuario", usuario); //Chamando rotas usuário
app.use("/produto", produto); //Chamando rotas produto
app.use("/auth", auth); //Chamando rotas de login

app.get('/', (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    })
});

app.listen(PORT, () => {
    console.log(`Rodando na porta http://localhost:${PORT} `);
})