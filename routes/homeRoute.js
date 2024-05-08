const express = require('express');
const HomeController = require('../controllers/homeController');
const AnimalModel = require('../models/animalModel');
const EmpresaParceiraModel = require('../models/empresaParceiraModel');
const VoluntarioModel = require('../models/voluntarioModel');

const router = express.Router();
const animalModel = new AnimalModel();
const empresaParceiraModel = new EmpresaParceiraModel();
const voluntarioModel = new VoluntarioModel();
const homeController = new HomeController(animalModel, empresaParceiraModel, voluntarioModel);

router.get("/", homeController.homeView.bind(homeController));

module.exports = router;



/*const express = require('express');
const HomeController = require('../controllers/homeController');
const AnimalModel = require('../models/animalModel');

const router = express.Router();
let ctrl = new HomeController();
const animalModel = new AnimalModel();
router.get("/", ctrl.homeView);
router.get('/semlayout', ctrl.semLayoutView);

module.exports = router;*/