//animalController.js
const AnimalModel = require('../models/animalModel');

class AnimalController {
    constructor() {
        this.animalModel = new AnimalModel();
    }

    async listarAnimais(req, res) {
        try {
            const animais = await this.animalModel.listarAnimais();
            animais.forEach(animal => {
                // Formatar Data de Admissão
                animal.animDataAdmissao = animal.animDataAdmissao.toLocaleDateString();
            });
            res.render('Animal/listarAnimal', { animais });
        } catch (error) {
            res.status(500).send("Erro ao listar animais: " + error.message);
        }
    }

    async cadastrarAnimal(req, res) {
        try {
            const { animNome, animEspecie, animRaca, animSexo, animPeso, animDataAdmissao, animstatusDoacao, animDescricao, animResponsavelAtual } = req.body;
            const novoAnimal = { animNome, animEspecie, animRaca, animSexo, animPeso, animDataAdmissao, animstatusDoacao, animDescricao, animResponsavelAtual };
            const resultado = await this.animalModel.cadastrarAnimal(novoAnimal);
            res.redirect('/animais');
        } catch (error) {
            res.status(500).send("Erro ao cadastrar animal: " + error.message);
        }
    }
    

    async editarAnimal(req, res) {
        try {
            const id = req.params.id;
            const { animNome, animEspecie, animRaca, animSexo, animPeso, animDataAdmissao, animstatusDoacao, animDescricao, animResponsavelAtual } = req.body;
            const novoAnimal = { animNome, animEspecie, animRaca, animSexo, animPeso, animDataAdmissao, animstatusDoacao, animDescricao, animResponsavelAtual };
            const resultado = await this.animalModel.editarAnimal(id, novoAnimal);
            res.redirect('/animais');
        } catch (error) {
            res.status(500).send("Erro ao editar animal: " + error.message);
        }
    }    
    

    async renderizarPaginaEdicao(req, res) {
        try {
            const id = req.params.id;
            const animal = await this.animalModel.obterAnimalPorId(id);
            res.render('Animal/editarAnimal', { animal });
        } catch (error) {
            res.status(500).send("Erro ao renderizar página de edição: " + error.message);
        }
    }

    async atualizarAnimal(req, res) {
        try {
            const id = req.params.id;
            const { animNome, animEspecie, animRaca, animSexo, animPeso, animDataAdmissao, animstatusDoacao, animDescricao, animResponsavelAtual } = req.body;
            const novoAnimal = { animNome, animEspecie, animRaca, animSexo, animPeso, animDataAdmissao, animstatusDoacao, animDescricao, animResponsavelAtual };
            const resultado = await this.animalModel.editarAnimal(id, novoAnimal);
            res.redirect('/animais');
        } catch (error) {
            res.status(500).send("Erro ao atualizar animal: " + error.message);
        }
    }

    async removerAnimal(req, res) {
        try {
            const id = req.params.id;
            const resultado = await this.animalModel.removerAnimal(id);
            res.redirect('/animais');
        } catch (error) {
            res.status(500).send("Erro ao remover animal: " + error.message);
        }
    }
    

}

module.exports = AnimalController;