var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// });

router.get("/dadoRegiaoNordeste", function (req, res) {
    medidaController.dadoRegiaoNordeste(req, res);
});

router.get("/dadoRegiaoNorte", function (req, res) {
    medidaController.dadoRegiaoNorte(req, res);
});

router.get("/dadoRegiaoSudeste", function (req, res) {
    medidaController.dadoRegiaoSudeste(req, res);
});


router.get("/dadoRegiaoSul", function (req, res) {
    medidaController.dadoRegiaoSul(req, res);
});

router.get("/dadoRegiaoCentroOeste", function (req, res) {
    medidaController.dadoRegiaoCentroOeste(req, res);
});


module.exports = router;