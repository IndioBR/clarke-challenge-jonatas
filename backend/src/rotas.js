const express = require('express');
const {
    login,
    cadastrarCliente,
    detalharUsuario
} = require('./controladores/usuarios');
const {
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

rotas.post('/cadastro', nome, email, senha, cadastrarCliente);
rotas.post('/login', email, senha, login);

rotas.post('/search', procurarFornecedor);
rotas.get('/', detalharUsuario)

module.exports = rotas;