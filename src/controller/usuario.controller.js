const findUserByIdController = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao buscar usuário, tente novamente!` });
    }
};

const findAllUsersController = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao buscar usuários, tente novamente!` });
    }
};

const CreateUserController = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao criar usuário, tente novamente!` });
    }
};

const UpdateUserController = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao atualizar usuário, tente novamente!` });
    }
};

const RemoveUserController = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado deletar usuário, tente novamente!` });
    }
};

const AddUserAdressController = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao adicionar endereço, tente novamente!` });
    }
};

const RemoveUserAdressController = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado deletar endereço, tente novamente!` });
    }
};

const AddUserFavProductController = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado adicionar favorito, tente novamente!` });
    }
};

const RemoveUserFavProductController = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado remover favorito, tente novamente!` });
    }
};





module.exports = {
    findUserByIdController,
    findAllUsersController,
    CreateUserController,
    UpdateUserController,
    RemoveUserController,
    AddUserAdressController,
    RemoveUserAdressController,
    AddUserFavProductController,
    RemoveUserFavProductController
}