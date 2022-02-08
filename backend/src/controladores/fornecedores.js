const conexao = require('../conexao');

async function listarFornecedores(req, res) {
    const { usuario } = req;

    try {
        const query = 'select * from fornecedores where min_kwh >= $1';

        const { rows, rowCount } = await conexao.query(query, [usuario.consumo]);

        if (!rowCount) return res.status(400).json('mensagem: Não encontrado')
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

async function procurarFornecedor(req, res) {
    const { usuario, body } = req;
    console.log('1')
    try {
        const query = 'update clientes set consumo = $1 where id = $2';
        console.log('2')
        const { rowCount } = await conexao.query(query, [body.consumo, usuario.id]);
        console.log('3')
        if (!rowCount) return res.status(400).json('mensagem: Não atualizado');
        console.log('4')
        return res.status(200).json('mansagem: Cliente atualizado');
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {
    listarFornecedores,
    procurarFornecedor
}