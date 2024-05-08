//empresaParceiraModel.js

const Database = require('../utils/database');

class EmpresaParceiraModel {
    constructor() {
        this.db = new Database();
    }

    async listarEmpresasParceiras() {
        try {
            const query = "SELECT * FROM EmpresaParceira";
            const empresas = await this.db.ExecutaComando(query, []);
            return empresas;
        } catch (error) {
            throw error;
        }
    }

    async cadastrarEmpresaParceira(novaEmpresa) {
        try {
            const query = "INSERT INTO EmpresaParceira SET ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, novaEmpresa);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async editarEmpresaParceira(id, novaEmpresa) {
        try {
            const query = "UPDATE EmpresaParceira SET ? WHERE empId = ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, [novaEmpresa, id]);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async obterEmpresaParceiraPorId(id) {
        try {
            const query = "SELECT * FROM EmpresaParceira WHERE empId = ?";
            const resultado = await this.db.ExecutaComando(query, [id]);
            return resultado[0];
        } catch (error) {
            throw error;
        }
    }

    async removerEmpresaParceira(id) {
        try {
            const query = "DELETE FROM EmpresaParceira WHERE empId = ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, [id]);
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    async contarEmpresasParceiras() {
        try {
            const query = "SELECT COUNT(*) AS total FROM EmpresaParceira";
            const resultado = await this.db.ExecutaComando(query, []);
            return resultado[0].total;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = EmpresaParceiraModel;
