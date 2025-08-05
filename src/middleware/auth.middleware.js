const jwt = require('jsonwebtoken');
const { findUserByIdService } = require('../service/usuario.service');

module.exports = async (req, res, next) => { 
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ message: 'Token inválido 1' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ message: 'Token mal formatado' });
    }

    jwt.verify(token, "$2a$12$Fi4CgF329prNsU3ppQfbt.IgDucgWVz5xZMGaWLaGKiM2GxDY9xEW", async (err, decoded) => {
        if(err) {
            console.log(err);
            
            return res.status(500).json({ message: 'Token inválido 2' });
        }
        const user = await findUserByIdService(decoded.id);

        if (!user || user.id !== decoded.id) {
            return res.status(404).json({ message: 'Token inválido 3' });
        }
        req.userid = decoded.id;
        return next();
    });  

}