const express = require('express');
const connectToDatabase = require('./src/database/database'); //arquivo de conexão com o banco
require('dotenv').config(); //variaveis de ambiente
const app = express();
const usuario = require('./src/router/usuario.router'); //arquivo de rota do usuário
const produto = require('./src/router/produto.router'); //arquivo de rota do produto
const categoria = require('./src/router/categoria.router'); //arquivo de rota da categoria
const carrinho = require('./src/router/carrinho.router'); //arquivo de rota do carrinho
const pedido = require('./src/router/pedido.router'); //arquivo de rota do pedido
const auth = require('./src/router/auth.router'); //arquivo de rota do usuário
const docs = require('./src/router/docs.router'); //arquivo de rota da documentação

const PORT = 3001;

app.use(express.json());

connectToDatabase(); //Conctando com o banco

app.use("/usuario", usuario); //Chamando rotas usuário
app.use("/produto", produto); //Chamando rotas produto
app.use("/categoria", categoria); //Chamando rotas categoria
app.use("/carrinho", carrinho); //Chamando rotas carrinho
app.use("/pedido", pedido); //Chamando rotas pedido
app.use("/auth", auth); //Chamando rotas de login
app.use('/docs', docs); //Chamando rotas de documentação
app.get('/', (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    })
});

app.listen(PORT, () => {
    console.log(`Rodando na porta http://localhost:${PORT} `);
})