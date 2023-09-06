// Importe o modelo de munição aqui
const {MunicaoModel} = require('../../models/municao-model');

class DeleteMunicaoController {
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ error: 'ID não informado' });
      }

      const municao = await MunicaoModel.findByPk(id);

      if (!municao) {
        return res.status(404).json({ error: 'Munição não encontrada' });
      }

      await municao.destroy();

      return res.status(200).json({ message: 'Munição excluída com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir munição:', error);
      return res.status(500).json({ error: 'Erro ao excluir munição' });
    }
  }
}

module.exports = new DeleteMunicaoController();
