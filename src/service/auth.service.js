const Usuario = require("../model/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const loginService = async (email, senha) =>  Usuario.findOne({ email: email }).select("senha");

const generateToken = async (userId) => jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: "7d" });

module.exports = { loginService, generateToken };
