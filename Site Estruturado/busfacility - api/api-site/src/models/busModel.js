var database = require("../database/config");

function obterPassageiros(user) {
    instrucaoSql = ``;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterPassageiros
}