const authService = require("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ message: "Email e senha são obrigatórios." });
    }
    const user = await authService.loginService(email, senha);
    if (!user) {
        return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
        return res.status(401).json({ message: "Credenciais inválidas." });
    }
    const token = await authService.generateToken(user._id);
    return res.status(200).send({
        email, token
    });    
}
module.exports = { loginController };