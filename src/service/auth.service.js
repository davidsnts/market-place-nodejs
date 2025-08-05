const Usuario = require("../model/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const loginService = async (email, senha) =>  Usuario.findOne({ email: email }).select("senha");

const generateToken = async (userId) => jwt.sign({ id: userId }, "$2a$12$Fi4CgF329prNsU3ppQfbt.IgDucgWVz5xZMGaWLaGKiM2GxDY9xEW", { expiresIn: "86400" });

module.exports = { loginService, generateToken };
