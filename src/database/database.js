const mongoose = require('mongoose');

function connectToDatabase() {

    mongoose.connect(process.env.URLDATABASE)
    .then(() => {
        console.log('Mongo db conectado');
    }).catch((err) => {
        return console.log(`Erro na conexão com o db: ${err}`);
    });

}

module.exports = connectToDatabase;