var express = require("express");
var router = express.Router();

var commentController = require("../controllers/commentsController");

router.get("/", function (req, res) {
    commentController.testar(req, res);
});

router.get("/load", function (req, res) {
    commentController.load(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de commentController
router.post("/enviar", function (req, res) {
    commentController.enviar(req, res);
})



// router.post("/autenticar", function (req, res) {
//     usuarioControllerEnd.entrar(req, res);
// });

module.exports = router;