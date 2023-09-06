// Importe o modelo de munição aqui
const { MunicaoModel } = require('../../models/municao-model');

// Função para buscar todas as munições
async function getAllMunicoes(req, res) {
  try {
    const municoes = await MunicaoModel.findAll();
    res.json(municoes);
  } catch (error) {
    console.error('Erro ao buscar munições:', error);
    res.status(500).json({ error: 'Erro ao buscar munições' });
  }
}

module.exports = {
  getAllMunicoes,
};
