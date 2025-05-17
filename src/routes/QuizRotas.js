const express = require('express');
const router = express.Router();
const quizControlador = require('../controllers/QuizControlador');

router.post('/iniciar', quizControlador.iniciar);
router.post('/finalizar', quizControlador.finalizar);

module.exports = router;
