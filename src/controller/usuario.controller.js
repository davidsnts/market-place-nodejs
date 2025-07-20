const userService = require('../service/usuario.service');

const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user)
            return res.status(404).send({ message: "Usuário não encontrado" });

        return res.status(200).send(user);

    } catch (err) {
        if (err) {
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ "msg": "ID informado está incorreto. Tente novamente!" });
        }
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao buscar usuário, tente novamente!` });
    }
};

const findAllUsersController = async (req, res) => {
    try {

        return res.status(200).send(await userService.findAllUsersService());

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao buscar usuários, tente novamente!` });
    }
};

const CreateUserController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({ "msg": "O campo nome é obrigatório." })
        }
        res.status(201).send(await userService.CreateUserService(body));

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao criar usuário, tente novamente!` });
    }
};

const UpdateUserController = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        console.log(id);
        
        if (!body.nome) {
            return res.status(400).send({ "msg": "O campo nome é obrigatório." })
        }

        return res.send(await userService.UpdateUserService(id, body));

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao atualizar usuário, tente novamente!` });
    }
};

const RemoveUserController = async (req, res) => {
    try {
        const deletedUser = await userService.RemoveUserService(req.params.id);
                
        if (deletedUser)
            return res.status(200).send({ "msg": `Usuário deletado!` });
        else
           return res.status(404).send({ "msg": `Usuário não encontrado!` });

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