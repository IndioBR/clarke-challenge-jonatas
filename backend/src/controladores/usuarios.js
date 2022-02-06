const conexao = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const segredo = require('../middleware/segredo')

async function login(req, res) {
    const  { email, senha } = req.body;
    try {
        const verificarEmail = 'select * from usuarios where email = $1'
        const { rowCount, rows } = await conexao.query(verificarEmail, [email]);

        if (rowCount === 0) return res.status(400).json('mensagem: Usuário não encontrado');

        const usuario = rows[0];

        const verificarSenha = await bcrypt.compare(senha, usuario.senha);

        if (!verificarSenha) return res.status(400).json('mensagem: Email/Senha inválido');

        const token = jwt.sign({ id: usuario.id }, segredo, {expiresIn: '1d'});

        return res.status(200).json(token);
    } catch (error) {
        return res.status(400).json('mensagem: Usuário não cadastrado.');
    }
}

async function cadastrarUsuario(req, res) {
    try {
        const { nome, email, senha } = req.body;
        const existe = await conexao.query("select email from usuarios where email = $1", [email]);

        if (existe.rowCount >= 1){
            return res.status(400).json('mensagem: Email já existe');
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const cadastro = await conexao.query(
            'insert into usuarios (nome, email, senha) values ($1, $2, $3)', 
            [nome, email, senhaHash]
        );

        if (cadastro.rowCount === 0) return res.status(400).json('mensagem: Não foi possível realizar o cadastro.');

        res.status(200).json('mensagem: Usuário cadastrado');
    } catch (error) {
        return res.status(400).json('mensagem: Usuário não cadastrado.');
    }
    
}

module.exports = {
    login,
    cadastrarUsuario,
};