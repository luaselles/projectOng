//empresaParceiraController.js

const EmpresaParceiraModel = require('../models/empresaParceiraModel');

class EmpresaParceiraController {
    constructor() {
        this.empresaParceiraModel = new EmpresaParceiraModel();
    }

    async listarEmpresasParceiras(req, res) {
        try {
            const empresas = await this.empresaParceiraModel.listarEmpresasParceiras();
            res.render('EmpresaParceira/listarEmpresaParceira', { empresas });
        } catch (error) {
            res.status(500).send("Erro ao listar empresas parceiras: " + error.message);
        }
    }

    async cadastrarEmpresaParceira(req, res) {
        try {
            const { empNome, empCnpj, empEmail, empResponsavel, empTelefone } = req.body;
            const novaEmpresa = { empNome, empCnpj, empEmail, empResponsavel, empTelefone };
            await this.empresaParceiraModel.cadastrarEmpresaParceira(novaEmpresa);
            res.redirect('/empresas-parceiras');
        } catch (error) {
            res.status(500).send("Erro ao cadastrar empresa parceira: " + error.message);
        }
    }

    async editarEmpresaParceira(req, res) {
        try {
            const id = req.params.id;
            const { empNome, empCnpj, empEmail, empResponsavel, empTelefone } = req.body;
            const novaEmpresa = { empNome, empCnpj, empEmail, empResponsavel, empTelefone };
            await this.empresaParceiraModel.editarEmpresaParceira(id, novaEmpresa);
            res.redirect('/empresas-parceiras');
        } catch (error) {
            res.status(500).send("Erro ao editar empresa parceira: " + error.message);
        }
    }

    async renderizarPaginaEdicao(req, res) {
        try {
            const id = req.params.id;
            const empresa = await this.empresaParceiraModel.obterEmpresaParceiraPorId(id);
            res.render('EmpresaParceira/editarEmpresaParceira', { empresa });
        } catch (error) {
            res.status(500).send("Erro ao renderizar página de edição: " + error.message);
        }
    }

    async removerEmpresaParceira(req, res) {
        try {
            const id = req.params.id;
            await this.empresaParceiraModel.removerEmpresaParceira(id);
            res.redirect('/empresas-parceiras');
        } catch (error) {
            res.status(500).send("Erro ao remover empresa parceira: " + error.message);
        }
    }
}

module.exports = EmpresaParceiraController;
