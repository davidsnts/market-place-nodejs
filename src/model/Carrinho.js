const mongoose = require('mongoose');

const CarrinhoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'produtos' },
            quantidade: { type: Number, required: true, default: 1 }
        },
    ],
    createdAt: { type: Date, default: Date.now, required: true },
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true },
});

const Carrinho =  mongoose.model('carrinhos', CarrinhoSchema);
module.exports = Carrinho;