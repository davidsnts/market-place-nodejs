const mongoose = require('mongoose');

const CategoriaSchema = mongoose.Schema({
    nome: { type: String, required: true, unique: true },
});

const Categoria = mongoose.model('categorias', CategoriaSchema);

module.exports = Categoria;