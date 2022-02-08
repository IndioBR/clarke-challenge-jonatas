const express = require('express');
const {
    login,
    cadastrarCliente
} = require('./controladores/usuarios');
const {
    listarFornecedores,
    procurarFornecedor
} = require('./controladores/fornecedores');
const { 
    nome,
    email, 
    senha,
    token
} = require('./middleware/verificacao');

const rotas = express();

rotas.use(express.json());

// Usuário
rotas.post('/cliente', nome, email, senha, cadastrarCliente);
rotas.post('/login', email, senha, login);

// Produtos
rotas.get('/inicio', token, listarFornecedores);
rotas.post('/search', token, procurarFornecedor)

module.exports = rotas;