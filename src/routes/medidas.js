var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasTentativas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarTentativaEmTempoReal(req, res);
})
module.exports = router;