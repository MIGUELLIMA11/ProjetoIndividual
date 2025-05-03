var database = require("../database/config")

function autenticar(login, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", login, senha)

const isEmail = login.includes("@");
var instrucaoSql
if (isEmail) {
    instrucaoSql = `
    SELECT idUsuario, Nome, Telefone, Email FROM Usuarios WHERE (Email = '${login}' or Nome = '${login}') AND senha = '${senha}';
`;
} else{
    instrucaoSql = `
    SELECT idUsuario, Nome, Telefone, Email
    FROM Usuarios 
    WHERE Nome = '${login}' AND Senha = '${senha}';
`;
}
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, telefone ,email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, telefone, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Usuarios (Nome, Telefone, Email, Senha) VALUES ('${nome}', '${telefone}','${email}', '${senha}'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};