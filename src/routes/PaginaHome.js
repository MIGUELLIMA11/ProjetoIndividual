var express = require("express");
const path = require('path');
var router = express.Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'PaginaHome', 'PaginaHome.html' ));
});

module.exports = router;