// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizControllers');

// Rota para buscar tentativas
router.get('/tentativas/:idUsuario', quizController.buscarTentativas);

module.exports = router;
