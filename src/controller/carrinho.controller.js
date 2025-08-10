const carrinhoService = require('../service/carrinho.service');

const findCarrinhoByIdController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.findCarrinhoByIdService(req.params.id));
    } catch (err) {
        return res.status(500).send({ error: 'Error finding carrinho' });
    }
}

const findAllCarrinhosController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.findAllCarrinhosService(req.paginacao.limit, req.paginacao.offset));
    } catch (err) {
        return res.status(500).send({ error: 'Error finding all' });
    }
}

const createCarrinhoController = async (req, res) => {
        try {
        
        const corpo = {
            ...req.body,
            userId: req.userid
        };      
        
        return res.status(201).send(await carrinhoService.createCarrinhoService(corpo));
    } catch (err) {
        return res.status(500).send({ error: 'Error create carrinho' });
    }
}

const updateCarrinhoController = async (req, res) => {
        
    try {       
        return res.status(200).send(await carrinhoService.updateCarrinhoService(req.params.id, req.body));
    } catch (err) {
        return res.status(500).send({ error: 'Error update carrinho' });
    }
}


const deleteCarrinhoController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.deleteCarrinhoService(req.params.id));
    } catch (err) {
        return res.status(500).send({ error: 'Error delete carrinho' });
    }
}

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhosController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController
}