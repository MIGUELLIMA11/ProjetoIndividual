
const quizModel = require('../models/quizModel');  // Certifique-se de que o modelo existe

// Função para buscar as tentativas do quiz de um usuário
function buscarTentativas(req, res) {
    const idUsuario = req.params.idUsuario;  // Captura o ID do usuário da URL

    console.log(`Buscando tentativas do usuário com ID: ${idUsuario}`);

    // Chama o model para pegar as tentativas do banco
    quizModel.buscarTentativas(idUsuario)
        .then(result => {
            if (result.length > 0) {
                // Se houver tentativas, retorna elas
                res.status(200).json(result);
            } else {
                // Caso contrário, envia um status 204 (sem conteúdo)
                res.status(204).send("Nenhuma tentativa encontrada para esse usuário.");
            }
        })
        .catch(error => {
            console.log("Erro ao buscar tentativas:", error);
            res.status(500).json({ message: "Erro ao buscar tentativas.", error });
        });
}

module.exports = {
    buscarTentativas,
};
