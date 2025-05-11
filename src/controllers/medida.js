// controllers/quizController.js
const quizModel = require("../models/quizModel");

function buscarTentativas(req, res) {
    const idUsuario = req.params.idUsuario; // Pegando o ID do usuário da URL

    console.log(`Buscando tentativas para o usuário ${idUsuario}`);

    quizModel.buscarTentativas(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarTentativas
};
