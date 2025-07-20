const express = require("express");
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');


//rotas GET
router.get('/findById/:id', usuarioController.findUserByIdController);

router.get('/findAll', usuarioController.findAllUsersController);

//rotas Post

router.post('/create', usuarioController.CreateUserController);

router.post('/addAdress/:id', usuarioController.AddUserAdressController);

router.post('/removeAdress/:id', usuarioController.RemoveUserAdressController);

router.post('/addFavProduct/:id', usuarioController.AddUserFavController);


//rotas put
router.put('/update/:id', usuarioController.UpdateUserController);

//rotas delete
router.delete('/remove/:id', usuarioController.RemoveUserController);

router.delete('/removeAdress', usuarioController.RemoveUserAdressController);

router.delete('/removeProduct', usuarioController.RemoveUserFavController);

module.exports = router;

