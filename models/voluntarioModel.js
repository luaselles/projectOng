//voluntarioModel.js
const Database = require('../utils/database');

class VoluntarioModel {
    constructor() {
        this.db = new Database();
    }

    async listarVoluntarios() {
        try {
            const query = "SELECT * FROM Voluntario";
            const voluntarios = await this.db.ExecutaComando(query, []);
            return voluntarios;
        } catch (error) {
            throw error;
        }
    }

    async cadastrarVoluntario(novoVoluntario) {
        try {
            const query = "INSERT INTO Voluntario SET ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, novoVoluntario);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async removerVoluntario(id) {
        try {
            const query = "DELETE FROM Voluntario WHERE Pessoa_id = ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, [id]);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async obterVoluntarioPorId(id) {
        try {
            const query = "SELECT * FROM Voluntario WHERE Pessoa_id = ?";
            const resultado = await this.db.ExecutaComando(query, [id]);
            return resultado[0]; 
        } catch (error) {
            throw error;
        }
    }

    async atualizarVoluntario(id, novosDados) {
        try {
            const query = "UPDATE Voluntario SET ? WHERE Pessoa_id = ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, [novosDados, id]);
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    async contarVoluntarios() {
        try {
            const query = "SELECT COUNT(*) AS total FROM Voluntario";
            const resultado = await this.db.ExecutaComando(query, []);
            return resultado[0].total;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = VoluntarioModel;
