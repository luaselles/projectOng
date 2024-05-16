const express = require('express');
const SaidaEventoController = require('../controllers/saidaEventoController');
const router = express.Router();
const saidaEventoController = new SaidaEventoController();
const methodOverride = require('method-override');
router.use(methodOverride('_method'));

router.get('/', saidaEventoController.listarSaidasEventos.bind(saidaEventoController));
router.get('/cadastrar', (req, res) => { res.render('SaidaEvento/cadastrarSaidaEvento'); });
router.get('/:id/editar', saidaEventoController.renderizarPaginaEdicao.bind(saidaEventoController));
router.post('/', saidaEventoController.cadastrarSaidaEvento.bind(saidaEventoController));
router.put('/:id', saidaEventoController.editarSaidaEvento.bind(saidaEventoController));
router.delete('/:id', saidaEventoController.removerSaidaEvento.bind(saidaEventoController));

module.exports = router;
