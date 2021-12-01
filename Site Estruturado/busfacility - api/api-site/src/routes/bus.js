var express = require("express");
var router = express.Router();

var busController = require("../controllers/busController");

router.get("/obterassageiros/:user", function (req, res) {
    busController.obterPassageiros(req, res);
});


router.post("/addColaborador", function (req, res) {
    busController.addColaborador(req, res);
});

module.exports = router;