//voluntariosController.js

const VoluntarioModel = require('../models/voluntarioModel');

class VoluntarioController {
    constructor() {
        this.voluntarioModel = new VoluntarioModel();
    }

    async listarVoluntarios(req, res) {
        try {
            const voluntarios = await this.voluntarioModel.listarVoluntarios();
            res.render('Voluntario/listarVoluntario', { voluntarios });
        } catch (error) {
            res.status(500).send("Erro ao listar voluntários: " + error.message);
        }
    }

    async cadastrarVoluntario(req, res) {
        try {
            const { voluDisponibilidade, voluHabilidades, voluPrefeAtuacao, Pessoa_id } = req.body;
            const novoVoluntario = { voluDisponibilidade, voluHabilidades, voluPrefeAtuacao, Pessoa_id };
            const resultado = await this.voluntarioModel.cadastrarVoluntario(novoVoluntario);
            res.redirect('/voluntarios');
        } catch (error) {
            res.status(500).send("Erro ao cadastrar voluntário: " + error.message);
        }

        
    }

    async removerVoluntario(req, res) {
        try {
            const id = req.params.id;
            const resultado = await this.voluntarioModel.removerVoluntario(id);
            res.redirect('/voluntarios');
        } catch (error) {
            res.status(500).send("Erro ao remover voluntário: " + error.message);
        }
    }
    
    async editarVoluntario(req, res) {
        try {
            const id = req.params.id;
            const volunteer = await this.voluntarioModel.obterVoluntarioPorId(id);
            if (!volunteer) {
                return res.status(404).send("Voluntário não encontrado.");
            }
            res.render('Voluntario/editarVoluntario', { voluntario: volunteer });
        } catch (error) {
            res.status(500).send("Erro ao editar voluntário: " + error.message);
        }
    }    
    
    async atualizarVoluntario(req, res) {
        try {
            const id = req.params.id;
            const { voluDisponibilidade, voluHabilidades, voluPrefeAtuacao, Pessoa_id } = req.body;
            const novosDados = { voluDisponibilidade, voluHabilidades, voluPrefeAtuacao, Pessoa_id };
            
            const voluntarioExistente = await this.voluntarioModel.obterVoluntarioPorId(id);
            if (!voluntarioExistente) {
                return res.status(404).send("Voluntário não encontrado.");
            }
            
            const resultado = await this.voluntarioModel.atualizarVoluntario(id, novosDados);
            res.redirect('/voluntarios');
        } catch (error) {
            res.status(500).send("Erro ao atualizar voluntário: " + error.message);
        }
    }
    
}

module.exports = VoluntarioController;
