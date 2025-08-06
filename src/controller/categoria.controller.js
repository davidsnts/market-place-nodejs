const categoriaService = require('../service/categoria.service');

const findCategoriaByIdController = async (req, res) => {
    try {
        const categoria = await categoriaService.findCategoriaByIdService(req.params.id);
        res.status(200).send(categoria);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const findAllCategoriasController = async (req, res) => {
    try {
        const categorias = await categoriaService.findAllCategoriasService();
        res.status(200).send(categorias);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const createCategoriaController = async (req, res) => {
    try {
        const categoria = await categoriaService.createCategoriaService(req.body);
        res.status(201).send(categoria);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const updateCategoriaController = async (req, res) => {
    try {
        const categoria = await categoriaService.updateCategoriaService(req.params.id, req.body);
        res.status(200).send(categoria);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const deleteCategoriaController = async (req, res) => {
    try {
        const categoria = await categoriaService.deleteCategoriaService(req.params.id);
        res.status(204).send(categoria);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    findCategoriaByIdController,
    findAllCategoriasController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
};  