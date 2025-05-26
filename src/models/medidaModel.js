var database = require("../database/config");

function buscarUltimasTentativas(idUsuario) {
    var instrucaoSql = `
      SELECT
    t.idTentativa,
    t.DtInicio AS dt_inicio,
    t.DtFinal AS dt_final,
    t.Acertos,
    t.erros,
    q.titulo AS nome_quiz,
    CONCAT(
        FLOOR(TIMESTAMPDIFF(SECOND, t.DtInicio, t.DtFinal) / 60), 'm ',
        MOD(TIMESTAMPDIFF(SECOND, t.DtInicio, t.DtFinal), 60), 's'
    ) AS tempo_minutos_segundos
FROM Tentativas t
JOIN Quiz q ON t.FkQuiz = q.idQuiz
WHERE t.FkUsuario = 1
ORDER BY t.DtInicio DESC
LIMIT 7;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTentativaEmTempoReal(idUsuario) {
    var instrucaoSql = `
        SELECT
    t.idTentativa,
    t.DtInicio AS dt_inicio,
    t.DtFinal AS dt_final,
    t.Acertos AS acertos,
    t.Erros AS erros,
    -- Calcular tempo decorrido formatado em mm:ss
    SEC_TO_TIME(TIMESTAMPDIFF(SECOND, t.DtInicio, t.DtFinal)) AS tempo_decorrido
FROM Tentativas t
WHERE t.FkUsuario = ${idUsuario}
ORDER BY t.DtInicio DESC
LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasTentativas,
    buscarTentativaEmTempoReal
};
