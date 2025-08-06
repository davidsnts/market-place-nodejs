const Produto = require('../model/Produto');

const findProductByIdService = (id) => {
    try {
        return Produto.findById(id);
    } catch (error) {
        throw new Error(`Error finding product by ID: ${error.message}`);
    }
}

const findAllProductsService = () => {
    try {
        return Produto.find();
    } catch (error) {
        throw new Error(`Error finding all products: ${error.message}`);
    }
}
const createProductService = (body) => {
    try {
        const product = Produto.create(body);
        return product;
    } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
}

const updateProductService = (id, body) => {
    try {
        const product = Produto.findByIdAndUpdate(id, body, { returnDocument: 'after' });
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
    }
}

const deleteProductService = (id) => {
    try {
        const product = Produto.findByIdAndDelete(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
}

const addCategoriaProdutoService = async (id, categoria) => {
    try {
        return Produto.findOneAndUpdate(
            { _id: id },
            {
                $push: {
                    categorias: {
                        _id: categoria._id,
                        createdAt: new Date()
                    }
                }
            },
            { rawResult: true }
        );
    } catch (error) {
        throw new Error(`Error adding category to product: ${error.message}`);
    }
};

const removeCategoriaProdutoService = async (id, categoria) => {
    try {
        return Produto.findOneAndUpdate(
            { _id: id },
            {
                $pull: {
                    categorias: {
                        _id: categoria._id

                    }
                }
            },
            { rawResult: true }
        );
    } catch (error) {
        throw new Error(`Error removing category from product: ${error.message}`);
    }
};
module.exports = {
    findProductByIdService,
    findAllProductsService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProdutoService,
    removeCategoriaProdutoService
};