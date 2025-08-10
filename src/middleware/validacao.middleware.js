const e = require("express");

const validaUsuario = (req, res, next) => {
    const usuario = req.body;

    try {
        if (!usuario?.nome) {
            return res.status(400).json({ message: 'Nome do usuário é obrigatório' });
        }

        if (!usuario?.email) {
            return res.status(400).json({ message: 'Email do usuário é obrigatório' });
        }

        if (!usuario?.senha) {
            return res.status(400).json({ message: 'Senha do usuário é obrigatória' });
        }

        if (!usuario?.imagem) {
            return res.status(400).json({ message: 'Imagem do usuário é obrigatória' });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Erro ao validar usuário',
            error: error.message
        });
    }
    return next();
}
const validaProduto = (req, res, next) => {
    const produto = req.body;
    let erros = [];
    try {
        if (!produto?.nome) {
            erros.push('Nome do produto');
        }
        if (!produto?.descricao) {
            erros.push('Descrição do produto');
        }
        if (!produto?.precoUnitario) {
            erros.push('Preço do produto');
        }
        if (!produto?.imagem) {
            erros.push('Imagem do produto');
        }

        if (!produto?.codigoBarra) {
            erros.push('codigo de barras do produto');
        }
        if (erros.length > 0) {
            if (erros.length === 1) {
                return res.status(400).json({ message: `O campo ${erros} precisa ser preenchido` });
            } else {
                return res.status(400).json({ message: `Os campos ${erros.join(', ')} precisam ser preenchidos` });
            }
        } else {
            return next();
        }



    } catch (error) {
        return res.status(500).json({
            message: 'Erro ao validar produto',
            error: error.message
        });
    }

}

const validaEndereco = (req, res, next) => {
    const endereco = req.body;

    try {
        let erros = [];
        if (!endereco?.rua) {errors.push('Rua do endereço'); }
        if (!endereco?.numero) { erros.push('Número do endereço'); }
        if (!endereco?.CEP) { erros.push('CEP do endereço'); }

        if (erros.length > 0) {
            if (erros.length === 1) {
                return res.status(400).json({ message: `O campo ${erros} precisa ser preenchido` });
            } else {
                return res.status(400).json({ message: `Os campos ${erros.join(', ')} precisam ser preenchidos` });
            }
        } else {
            return next();
        }

    }
    catch (error) {
        return res.status(500).json({
            message: 'Erro ao validar endereço',
            error: error.message
        });
    }
}
module.exports = { validaUsuario, validaProduto, validaEndereco };