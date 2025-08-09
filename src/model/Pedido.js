const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'produtos' },
            quantidade: { type: Number, required: true, default: 1 }
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now },
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true },
    concluido: { type: Boolean, required: true, default: false }
});

const Pedido =  mongoose.model('pedidos', PedidoSchema);
module.exports = Pedido;