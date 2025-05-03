var express = require("express");
const path = require('path');
var router = express.Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'FrontEnd', 'Cadastro.html'));
});

module.exports = router;