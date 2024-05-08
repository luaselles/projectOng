//voluntarioRoute.js
const express = require('express');
const VoluntarioController = require('../controllers/voluntarioController');
const router = express.Router();
const voluntarioController = new VoluntarioController();

router.get('/voluntarios', voluntarioController.listarVoluntarios.bind(voluntarioController));
router.get('/voluntarios/cadastrar', (req, res) => {res.render('Voluntario/cadastrarVoluntario');
});
router.post('/voluntarios/cadastrar', voluntarioController.cadastrarVoluntario.bind(voluntarioController));

router.delete('/voluntarios/:id', voluntarioController.removerVoluntario.bind(voluntarioController));

router.get('/voluntarios/:id/editar', voluntarioController.editarVoluntario.bind(voluntarioController));

router.post('/voluntarios/:id', voluntarioController.atualizarVoluntario.bind(voluntarioController));

module.exports = router;
