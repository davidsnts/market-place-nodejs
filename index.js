const express = require('express');
const connectToDatabase = require('./src/database/database'); //arquivo de conexão com o banco

const app = express();
const usuario = require('./src/router/usuario.router'); //arquivo de rota do usuário

const PORT = 3001;

app.use(express.json());

connectToDatabase(); //Conctando com o banco

app.use("/usuario", usuario); //Chamando rotas usuário

app.get('/', (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    })
});

app.listen(PORT, () => {
    console.log(`Rodando na porta http://localhost:${PORT} `);
})