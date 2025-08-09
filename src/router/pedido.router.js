const pedidoController = require('../controller/pedido.controller');
const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');

router.get('/find/:id', authMiddleware, pedidoController.findPedidoByIdController);
router.get('/findAll', authMiddleware, pedidoController.findAllPedidosController);
router.post('/create', authMiddleware, pedidoController.createPedidoController);
router.put('/update/:id', authMiddleware, pedidoController.updateStatusPedidoController);
router.delete('/delete/:id', authMiddleware, pedidoController.deletePedidoController);

module.exports = router;