class HomeController {
    constructor(animalModel, empresaParceiraModel, voluntarioModel) {
        this.animalModel = animalModel;
        this.empresaParceiraModel = empresaParceiraModel;
        this.voluntarioModel = voluntarioModel;
    }

    async homeView(req, res) {
        try {
            const totalAnimais = await this.animalModel.contarAnimais();
            const totalEmpresasParceiras = await this.empresaParceiraModel.contarEmpresasParceiras();
            const totalVoluntarios = await this.voluntarioModel.contarVoluntarios();
            res.render('home', { totalAnimais, totalEmpresasParceiras, totalVoluntarios });
        } catch (error) {
            res.status(500).send("Erro ao carregar página inicial: " + error.message);
        }
    }
}

module.exports = HomeController;
