var commentsModel = require("../models/commentsModel");

var sessoes = [];


function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var comentario = req.body.comentarioServer;
    var fk = req.body.fkServer;
    // var logradouro = req.body.logradouroServer;
    // var regiao = req.body.regiaoServer;
    // var numero = req.body.numeroServer;
    // var complemento = req.body.complementoServer;
    // var bairro = req.body.bairroServer;
    // var cidade = req.body.cidadeServer;
    // var uf = req.body.ufServer;

    // Faça as validações dos valores
    if (comentario == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    } 
    // else if (fk == undefined) {
    //     res.status(400).send("Sua fk está undefined!");
    // } 
    //else if (regiao == undefined) {
    //     res.status(400).send("Sua região está undefined!");
    // } else if (numero == undefined) {
    //     res.status(400).send("Seu numero está undefined!"); 
    // } else if (complemento == undefined) {
    //     res.status(400).send("Seu complemento está undefined!"); 
    // } else if (bairro == undefined) {
    //     res.status(400).send("Seu bairro está undefined!"); 
    // } else if (cidade == undefined) {
    //     res.status(400).send("Sua cidade está undefined!"); 
    // } else if (uf == undefined) {
    //     res.status(400).send("Seu uf está undefined!"); 
    // } 
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        commentsModel.enviar(comentario, fk)
            .then(
                function (enviar) {
                    res.json(enviar);
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

function load(req, res){
    commentsModel.load()
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
    load,
    enviar,
    listar,
    testar,
    
}