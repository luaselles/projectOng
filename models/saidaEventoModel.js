const Database = require('../utils/database');

class SaidaEventoModel {
    constructor() {
        this.db = new Database();
    }

    async listarSaidasEventos() {
        try {
            const query = "SELECT * FROM SaidaEvento";
            const saidas = await this.db.ExecutaComando(query, []);
            return saidas;
        } catch (error) {
            throw error;
        }
    }

    async cadastrarSaidaEvento(novaSaida) {
        try {
            const query = "INSERT INTO SaidaEvento SET ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, novaSaida);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async editarSaidaEvento(id, novaSaida) {
        try {
            const query = "UPDATE SaidaEvento SET ? WHERE saidaId = ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, [novaSaida, id]);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async obterSaidaEventoPorId(id) {
        try {
            const query = "SELECT * FROM SaidaEvento WHERE saidaId = ?";
            const resultado = await this.db.ExecutaComando(query, [id]);
            return resultado[0];
        } catch (error) {
            throw error;
        }
    }

    async removerSaidaEvento(id) {
        try {
            const query = "DELETE FROM SaidaEvento WHERE saidaId = ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, [id]);
            return resultado;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SaidaEventoModel;
