const express = require('express');
const connectToDatabase = require('./src/database/database');

const app = express();
const usuario = require('./src/router/usuario.router');

const PORT = 3001;

app.use(express.json());

connectToDatabase();

app.use("/usuario", usuario);

app.get('/', (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    })
});

app.listen(PORT, () => {
    console.log(`Rodando na porta http://localhost:${PORT} `);
})