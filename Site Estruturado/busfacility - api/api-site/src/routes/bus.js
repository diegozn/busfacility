var express = require("express");
var router = express.Router();

var busController = require("../controllers/busController");

router.get("/obterassageiros/:user", function (req, res) {
    busController.obterPassageiros(req, res);
});


module.exports = router;