const produtoService = require('../service/produto.service');

const findProductByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await produtoService.findProductByIdService(id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        } return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const findAllProductsController = async (req, res) => {
    try {
            const products = await produtoService.findAllProductsService(req.paginacao.limit, req.paginacao.offset);
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const createProductController = async (req, res) => {
    try {
        const body = {
            ...req.body,
            userId: req.userId
        };
        const product = await produtoService.createProductService(body);

        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}
const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await produtoService.updateProductService(id, body);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await produtoService.deleteProductService(id);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const addCategoriaProdutoController = async (req, res) => {
    try {
        req.body.createdAt = new Date();
        const categoria = await produtoService.addCategoriaProdutoService(req.params.id, req.body);
        return res.status(200).send(categoria);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const removeCategoriaProdutoController = async (req, res) => {
    try {
        const categoria = await produtoService.removeCategoriaProdutoService(req.params.id, req.body);
        return res.status(200).send(categoria);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {
    findProductByIdController,
    findAllProductsController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProdutoController,
    removeCategoriaProdutoController
};