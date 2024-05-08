//animalModel.js
const Database = require('../utils/database');

class AnimalModel {
    constructor() {
        this.db = new Database();
    }

    async listarAnimais() {
        try {
            const query = "SELECT * FROM Animal";
            const animais = await this.db.ExecutaComando(query, []);
            return animais;
        } catch (error) {
            throw error;
        }
    }

    async cadastrarAnimal(novoAnimal) {
        try {
            const query = "INSERT INTO Animal SET ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, novoAnimal);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async editarAnimal(id, novoAnimal) {
        try {
            const query = "UPDATE Animal SET ? WHERE animId = ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, [novoAnimal, id]);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async obterAnimalPorId(id) {
        try {
            const query = "SELECT * FROM Animal WHERE animId = ?";
            const resultado = await this.db.ExecutaComando(query, [id]);
            return resultado[0]; // Retorna o primeiro (e único) animal encontrado
        } catch (error) {
            throw error;
        }
    }

    async removerAnimal(id) {
        try {
            const query = "DELETE FROM Animal WHERE animId = ?";
            const resultado = await this.db.ExecutaComandoNonQuery(query, [id]);
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    async contarAnimais() {
        try {
            const query = "SELECT COUNT(*) AS total FROM Animal";
            const resultado = await this.db.ExecutaComando(query, []);
            return resultado[0].total;
        } catch (error) {
            throw error;
        }
    }
    
}



module.exports = AnimalModel;
