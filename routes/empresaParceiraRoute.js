//empresas-parceirasRoute.js
const express = require('express');
const EmpresaParceiraController = require('../controllers/empresaParceiraController');
const router = express.Router();
const empresaParceiraController = new EmpresaParceiraController();
const methodOverride = require('method-override');
router.use(methodOverride('_method'));

router.get('/', empresaParceiraController.listarEmpresasParceiras.bind(empresaParceiraController));
router.get('/cadastrar', (req, res) => { res.render('EmpresaParceira/cadastrarEmpresaParceira'); });
router.get('/:id/editar', empresaParceiraController.renderizarPaginaEdicao.bind(empresaParceiraController));
router.post('/', empresaParceiraController.cadastrarEmpresaParceira.bind(empresaParceiraController));
router.put('/:id', empresaParceiraController.editarEmpresaParceira.bind(empresaParceiraController));
router.delete('/:id', empresaParceiraController.removerEmpresaParceira.bind(empresaParceiraController));
router.post('/:id', empresaParceiraController.editarEmpresaParceira.bind(empresaParceiraController));

module.exports = router;
