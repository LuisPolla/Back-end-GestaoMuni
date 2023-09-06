const { MunicaoModel } = require('../../models/municao-model');

class UpdateMunicaoController {

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ error: 'ID não informado' });
            }

            const municao = await MunicaoModel.findByPk(id);

            if (!municao) {
                return res.status(404).json({ error: 'Munição não encontrada' });
            }

            // Desestruture os campos que podem ser atualizados
            const { modelo, calibragem, dataFabriacao, estadoConservacao, tipoPonta, material, peso, empresaFabricante } = req.body;
            const novosDados = {};

            // Valide e atualize apenas os campos que foram fornecidos
            if (modelo) {
                novosDados.modelo = modelo;
            }

            if (calibragem) {
                novosDados.calibragem = calibragem;
            }

            if (dataFabriacao) {
                // Valide a data de fabricação aqui, se necessário
                novosDados.dataFabriacao = dataFabriacao;
            }

            if (estadoConservacao) {
                // Valide o estado de conservação aqui, se necessário
                novosDados.estadoConservacao = estadoConservacao;
            }

            if (tipoPonta) {
                novosDados.tipoPonta = tipoPonta;
            }

            if (material) {
                novosDados.material = material;
            }

            if (peso) {
                novosDados.peso = peso;
            }

            if (empresaFabricante) {
                novosDados.empresaFabricante = empresaFabricante;
            }

            console.log("AQUI"); // Debug

            await municao.update(novosDados);

            return res.status(200).json({ message: 'Munição atualizada com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar munição:', error);
            return res.status(500).json({ error: 'Erro ao atualizar munição' });
        }
    }
}

module.exports = new UpdateMunicaoController();
