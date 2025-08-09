const Pedido = require('../model/Pedido');

const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
}

const findAllPedidosService = () => {
    return Pedido.find();
}

const createPedidoService = (body) => {
    return Pedido.create(body);
}

const deletePedidoService = (id) => {
    return Pedido.findByIdAndDelete(id);
}

const updateStatusPedidoService = (id) => { 
    return Pedido.findByIdAndUpdate({ _id: id }, { concluido: true });
}

module.exports = {
    findPedidoByIdService,
    findAllPedidosService,
    createPedidoService,
    updateStatusPedidoService,
    deletePedidoService
}