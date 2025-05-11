const database = require("../database/config");
function buscarTentativas(idUsuario) {
    var instrucaoSql = `
        SELECT 
            t.idTentativa,
            t.DtInicio AS dt_inicio,
            t.DtFinal AS dt_final,
            q.acertos,
            q.erros
        FROM tentativas t
        JOIN quiz q ON t.FkQuiz = q.idQuiz
        WHERE t.FkUsuario = ${idUsuario}
        ORDER BY t.DtInicio DESC
        LIMIT 7;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarTentativas
};

