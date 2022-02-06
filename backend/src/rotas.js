const express = require('express');
const {
    login,
    cadastrarUsuario,
} = require('./controladores/usuarios');
const {
    listarFornecedores
} = require('./controladores/produtos');
const { 
    nome,
    email, 
    senha,
    token,
} = require('./middleware/verificacao');

const rotas = express();

rotas.use(express.json());

// Usuário
rotas.post('/usuario', nome, email, senha, cadastrarUsuario);
rotas.post('/login', email, senha, login);

// Produtos
rotas.get('/inicio', token, listarFornecedores);

module.exports = rotas;