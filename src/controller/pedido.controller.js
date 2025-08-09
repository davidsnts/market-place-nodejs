const pedidoService = require('../service/pedido.service');

const findAllPedidosController = async (req, res) => {
    try {
        const pedidos = await pedidoService.findAllPedidosService();
        return res.status(200).json(pedidos);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar pedidos', error: error.message });
    }
}

const findPedidoByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await pedidoService.findPedidoByIdService(id);
        return res.status(200).json(pedido);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar pedido', error: error.message });
    }
};

const createPedidoController = async (req, res) => {
    try {
        const pedidoData = {
            ...req.body,
            userId: req.userid
        }       
        const newPedido = await pedidoService.createPedidoService(pedidoData);
        return res.status(201).json(newPedido);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar pedido', error: error.message });
    }
};

const updateStatusPedidoController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPedido = await pedidoService.updateStatusPedidoService(id, req.body);
        return res.status(200).json(updatedPedido);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar pedido', error: error.message });
    }
};

const deletePedidoController = async (req, res) => {
    try {
        const { id } = req.params;
        await pedidoService.deletePedidoService(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar pedido', error: error.message });
    }
};

module.exports = {
    findPedidoByIdController,
    createPedidoController,
    findAllPedidosController,
    updateStatusPedidoController,
    deletePedidoController
};