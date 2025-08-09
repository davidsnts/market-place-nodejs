const Usuario = require('../model/Usuario');

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const findAllUsersService = () => {
    return Usuario.find();
}

const CreateUserService = async (body) => {   
     try {        
        const novoUsuario = await Usuario.create(body);
        return novoUsuario;
    } catch (error) {        
        if (error.code === 11000 && error.keyPattern?.email) {
            throw new Error("Email já está em uso.");
        }        
        throw error;
    }
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
    return Usuario.findOneAndUpdate(
        { _id: id }, { $pull: { enderecos: { _id: adressId } } }, { rawResult: true }
    )
}

const AddUserFavProdcutService = (id, produto) => {
    return Usuario.findOneAndUpdate(
        { _id: id }, 
        { $push: { produtos_fav: { _id: produto._id } } }, 
        { rawResult: true }
    );
}

const RemoveUserFavProductService = (id, produto) => {
    return Usuario.findOneAndUpdate(
        { _id: id }, 
        { $pull: { produtos_fav: { _id: produto._id } } }, 
        { rawResult: true }
    );
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

