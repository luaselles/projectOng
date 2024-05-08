//animalRoute.js
const express = require('express');
const AnimalController = require('../controllers/animalController');
const router = express.Router();
const animalController = new AnimalController();
const methodOverride = require('method-override');
router.use(methodOverride('_method'));

router.get('/animais', animalController.listarAnimais.bind(animalController));
router.get('/cadastrar', (req, res) => { res.render('Animal/cadastrarAnimal'); });
router.get('/animais/:id/editar', animalController.renderizarPaginaEdicao.bind(animalController));
router.post('/animais', animalController.cadastrarAnimal.bind(animalController));
router.put('/animais/:id', animalController.editarAnimal.bind(animalController));
router.post('/animais/:id', animalController.atualizarAnimal.bind(animalController));
router.delete('/animais/:id', animalController.removerAnimal.bind(animalController));

module.exports = router;
