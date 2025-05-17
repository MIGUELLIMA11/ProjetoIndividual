// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const quizContro = require('../controllers/QuizControlador');

// Rota para buscar tentativas
router.get('/tentativas/:idUsuario', quizController.buscarTentativas);

module.exports = router;
