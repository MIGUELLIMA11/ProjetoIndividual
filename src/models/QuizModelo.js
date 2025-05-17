var database = require("../database/config");

function iniciarTentativa(idUsuario, fkQuiz) {
    var instrucaoSql = `
        INSERT INTO Tentativas (FkUsuario, FkQuiz, DtInicio) 
        VALUES (${idUsuario}, ${fkQuiz}, NOW());
    `;
    console.log("Executando: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function finalizarTentativa(idTentativa, acertos, erros, total) {
    var instrucaoSql = `
        UPDATE Tentativas 
        SET DtFinal = NOW(), Acertos = ${acertos}, Erros = ${erros}, Total = ${total}
        WHERE idTentativa = ${idTentativa};
    `;
    console.log("Executando: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    iniciarTentativa,
    finalizarTentativa
};
