var express = require("express");
var router = express.Router();

var busController = require("../controllers/busController");

router.get("/ultimas/:idAquario", function (req, res) {
    busController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    busController.buscarMedidasEmTempoReal(req, res);
})

router.post("/cadastrar", function (req, res) {
    busController.cadastrar(req, res);
})

module.exports = router;