const mongoose = require('mongoose');

function connectToDatabase() {

    mongoose.connect('mongodb://localhost:27017/market-place')
    .then(() => {
        console.log('Mongo db conectado');
    }).catch((err) => {
        return console.log(`Erro na conexão com o db: ${err}`);
    });

}

module.exports = connectToDatabase;