const SaidaEventoModel = require('../models/saidaEventoModel');

class SaidaEventoController {
    constructor() {
        this.saidaEventoModel = new SaidaEventoModel();
    }

    async listarSaidasEventos(req, res) {
        try {
            const saidas = await this.saidaEventoModel.listarSaidasEventos();
            res.render('SaidaEvento/listarSaidaEvento', { saidas });
        } catch (error) {
            res.status(500).send("Erro ao listar saídas de eventos: " + error.message);
        }
    }

    async cadastrarSaidaEvento(req, res) {
        try {
            const { empresaParceiraId, voluntarios, animais, produtos, patrimonioQtd } = req.body;
            const novaSaida = { empresaParceiraId, voluntarios, animais, produtos, patrimonioQtd };
            await this.saidaEventoModel.cadastrarSaidaEvento(novaSaida);
            res.redirect('/saidas-eventos');
        } catch (error) {
            res.status(500).send("Erro ao cadastrar saída de evento: " + error.message);
        }
    }

    async editarSaidaEvento(req, res) {
        try {
            const id = req.params.id;
            const { empresaParceiraId, voluntarios, animais, produtos, patrimonioQtd } = req.body;
            const novaSaida = { empresaParceiraId, voluntarios, animais, produtos, patrimonioQtd };
            await this.saidaEventoModel.editarSaidaEvento(id, novaSaida);
            res.redirect('/saidas-eventos');
        } catch (error) {
            res.status(500).send("Erro ao editar saída de evento: " + error.message);
        }
    }

    async renderizarPaginaEdicao(req, res) {
        try {
            const id = req.params.id;
            const saida = await this.saidaEventoModel.obterSaidaEventoPorId(id);
            res.render('SaidaEvento/editarSaidaEvento', { saida });
        } catch (error) {
            res.status(500).send("Erro ao renderizar página de edição: " + error.message);
        }
    }

    async removerSaidaEvento(req, res) {
        try {
            const id = req.params.id;
            await this.saidaEventoModel.removerSaidaEvento(id);
            res.redirect('/saidas-eventos');
        } catch (error) {
            res.status(500).send("Erro ao remover saída de evento: " + error.message);
        }
    }
}

module.exports = SaidaEventoController;
