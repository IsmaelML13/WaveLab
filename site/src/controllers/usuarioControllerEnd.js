var usuarioModel = require("../models/usuarioModelEnd");

var sessoes = [];


function cadastrarEnd(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cep = req.body.cepServer;
    var logradouro = req.body.logradouroServer;
    var regiao = req.body.regiaoServer;
    var numero = req.body.numeroServer;
    var complemento = req.body.complementoServer;
    var bairro = req.body.bairroServer;
    var cidade = req.body.cidadeServer;
    var uf = req.body.ufServer;

    // Faça as validações dos valores
    if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (regiao == undefined) {
        res.status(400).send("Sua região está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!"); 
    } else if (complemento == undefined) {
        res.status(400).send("Seu complemento está undefined!"); 
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!"); 
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!"); 
    } else if (uf == undefined) {
        res.status(400).send("Seu uf está undefined!"); 
    } 
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarEnd(cep, logradouro, regiao, numero, complemento,bairro, cidade, uf)
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
function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioEndModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function ultimaEmp(req, res){
    usuarioModel.ultimaEmp()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}


module.exports = {
    cadastrarEnd,
    listar,
    testar,
    ultimaEmp
}