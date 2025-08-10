const express = require("express");
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');
const authMiddleware = require('../middleware/auth.middleware');
const paginacao = require('../middleware/paginacao.middleware');

const { validaUsuario, validaEndereco } = require('../middleware/validacao.middleware');

//rotas GET
router.get('/findById/:id', authMiddleware, usuarioController.findUserByIdController);

router.get('/findAll', paginacao, usuarioController.findAllUsersController);

//rotas Post

router.post('/create', validaUsuario, usuarioController.CreateUserController);

router.post('/addAdress/:id', authMiddleware, validaEndereco, usuarioController.AddUserAdressController);

router.post('/removeAdress/:id', authMiddleware, usuarioController.RemoveUserAdressController);

router.post('/addFavProduct/:id', authMiddleware, usuarioController.AddUserFavProductController);

//rotas put
router.put('/update/:id', authMiddleware, validaUsuario, usuarioController.UpdateUserController);

//rotas delete
router.delete('/remove/:id', authMiddleware, usuarioController.RemoveUserController);

router.delete('/removeAdress', authMiddleware, usuarioController.RemoveUserAdressController);

router.post('/removeProduct/:id', authMiddleware, usuarioController.RemoveUserFavProductController);

module.exports = router;

