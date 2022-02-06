const conexao = require('../conexao');

async function listarFornecedores(req, res) {
    const { usuario } = req;
    try {
        const query = 'select * from fornecedores where min_kwh = $1'
        const { rows, rowCount } = await conexao.query(query, [usuario.consumo]);

        if (rowCount === 0) return res.status(204);

        return res.status(200).json(rows);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarFornecedores
}