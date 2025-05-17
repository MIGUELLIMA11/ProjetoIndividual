const quizModel = require('../models/QuizModelo');

// Iniciar tentativa (exemplo: quando o usuário abre o quiz)
function iniciar(req, res) {
    const { fkUsuario, fkQuiz } = req.body;
    quizModel.iniciarTentativa(fkUsuario, fkQuiz)
        .then(result => {
            // result.insertId tem o id da tentativa criada
            res.json({ idTentativa: result.insertId });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}

// Finalizar tentativa (quando o quiz termina)
function finalizar(req, res) {
    const {idTentativa, acertos, erros, total } = req.body;

    quizModel.finalizarTentativa(idTentativa, acertos, erros, total)
        .then(() => {
            res.json({ message: "Tentativa registrada com sucesso" });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}
module.exports = { iniciar, finalizar };
