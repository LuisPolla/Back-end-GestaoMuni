const { HistoricoModel } = require('../../models/historico-model');

class GetAllHistoricoController {
  async getAll(req, res) {
    try {
      // Consulta todos os registros de histórico
      const historicos = await HistoricoModel.findAll();

      return res.status(200).json(historicos);
    } catch (error) {
      console.error('Erro ao buscar históricos:', error);
      return res.status(500).json({ error: 'Erro ao buscar históricos' });
    }
  }
}

module.exports = new GetAllHistoricoController();
