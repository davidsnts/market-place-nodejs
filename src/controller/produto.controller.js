const produtoService = require('../service/produto.service');

const findProductByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await produtoService.findProductByIdService(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        } return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const findAllProductsController = async (req, res) => {
    try {
        const products = await produtoService.findAllProductsService();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const createProductController = async (req, res) => {
    try {
        const body = {
            ...req.body,
            userId : req.userId,
            createdAt: new Date()
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
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await produtoService.deleteProductService(id);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
module.exports = {
    findProductByIdController,
    findAllProductsController,
    createProductController,
    updateProductController,
    deleteProductController
};