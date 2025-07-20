const express = require("express");
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');

router.get('/findById/:id', usuarioController.findUserByIdController);

router.get('/findAll', usuarioController.findAllUsersController);

router.post('/create', usuarioController.CreateUserController);

router.post('/addAdress/:id', usuarioController.AddUserAdressController);

router.post('/removeAdress/:id', usuarioController.RemoveUserAdressController);

router.post('/addFavProduct/:id', usuarioController.AddUserFavController);

router.put('/update/:id', usuarioController.UpdateUserController);

router.delete('/remove/:id', usuarioController.RemoveUserController);

router.delete('/removeAdress', usuarioController.RemoveUserAdressController);

router.delete('/removeProduct', usuarioController.RemoveUserFavController);

module.exports = router;

