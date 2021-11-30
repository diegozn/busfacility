var busModel = require("../models/busModel");

var sessoes = [];

function addColaborador(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;
    var permissao = req.body.permissaoServer;


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        
        busModel.addColaborador(nome, senha, permissao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    addColaborador
}