const Usuario = require('../model/Usuario');

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const findAllUsersService = () => {
    return Usuario.find();
}

const CreateUserService = (body) => {
    return Usuario.create(body);
}

const UpdateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const RemoveUserService = (id) => {
    return Usuario.findByIdAndDelete(id);
}

const AddUserAdressService = (id, endereco) => {
    console.log(endereco);

    return Usuario.findOneAndUpdate(
        { _id: id }, { $push: { enderecos: endereco } }, { rawResult: true }
    )
}

const RemoveUserAdressService = (id, adressId) => {
    console.log(adressId);

    return Usuario.findOneAndUpdate(
        { _id: id }, { $pull: { enderecos: { _id: adressId } } }, { rawResult: true }
    )
}

const AddUserFavProdcutService = (id, produto) => {

}

const RemoveUserFavProductService = (id, produto) => {

}
module.exports = {
    findUserByIdService,
    findAllUsersService,
    CreateUserService,
    UpdateUserService,
    RemoveUserService,
    AddUserAdressService,
    RemoveUserAdressService,
    AddUserFavProdcutService,
    RemoveUserFavProductService,
}

