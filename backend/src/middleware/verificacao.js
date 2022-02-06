const conexao = require('../conexao');
const jwt = require('jsonwebtoken');
const segredo = require('./segredo');

async function nome(req, res, next) {
    const {nome} = req.body
    if (!nome) {
        return res.status(400).json('mensagem: Nome é obrigatório');
    } else {
        next();
    }
};

async function email(req, res, next) {
    const {email} = req.body;
    if (!email) {
        return res.status(400).json('mensagem: Email é obrigatório');
    } else if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json('mensagem: Email inválido');
    } else {
        next();
    }
};

async function senha(req, res, next) {
    const {senha} = req.body
    if (!senha) {
        return res.status(400).json('mensagem: Senha é obrigatório')
    } else if (senha.length < 4) {
        return res.status(400).json('mensagem: Senha deve ter 8 (oito) carácteres.');
    } else {
        next();
    }
};

async function token(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) return res.status(404).json('mensagem: Token não informado');

    try {
        const token = authorization.replace('Bearer', '').trim();

        const  { id } = jwt.verify(token, segredo);

        const query = 'select * from usuarios where id = $1';
        const { rowCount, rows } = await conexao.query(query, [id]);

        if (rowCount === 0) return res.status(400).json('mensagem: Usuário não encontrado');

        const { senha, ...usuario } = rows[0];

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(404).json('mensagem: Para acessar este recurso um token de autenticação válido deve ser enviado.');
    }
}


module.exports = {
    nome,
    email,
    senha,
    token
}