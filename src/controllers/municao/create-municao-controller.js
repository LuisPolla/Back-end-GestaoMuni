const { internalError, badRequest } = require('../../utils/http-helper');
const { stringToDate } = require('../../utils/formats');
const { validateDate } = require('../../utils/validations');
const { MunicaoModel } = require('../../models/municao-model');
const { HistoricoModel } = require('../../models/historico-model');

class CreateMunicaoController {
	async create(req, res) {
		try {
			// verificar se os dados foram passados
			const {
				modelo,
				calibragem,
				dataFabriacao,
				estadoConservacao,
				quatidadeEmEstoque,
				tipoPonta,
				material,
				peso,
				empresaFabricante
			} = req.body;
			if (
				!modelo || !calibragem || !dataFabriacao || !estadoConservacao || !quatidadeEmEstoque || !tipoPonta || !material || !peso || !empresaFabricante
			) {
				return res.status(400).json({
					error: badRequest('Dados incorretos')
				});
			}
			// verificar data de fabricação
			const dateFormated = stringToDate(dataFabriacao);
			if (!validateDate(dateFormated)) {
				return res.status(400).json({
					error: badRequest('Data de fabrição inválida')
				});
			}
			// verificar estado de conservacao: ABERTA ou FECHADA
			if (estadoConservacao !== 'ABERTA' && estadoConservacao !== 'FECHADA') {
				return res.status(400).json({
					error: badRequest('Estado de conservação inválido')
				});
			}
			// criar a munição
			const municao = await MunicaoModel.create({
				modelo,
				calibragem,
				dataFabriacao: dateFormated,
				estadoConservacao,
				quatidadeEmEstoque,
				tipoPonta,
				material,
				peso,
				empresaFabricante
			});
			// criar o histórico
			await HistoricoModel.create({
				userId: req.userId,
				municaoId: municao.id
			});
			return res.status(201).json({ municao });
		} catch (error) {
			return res.status(500).json({
				error: internalError(error)
			});
		}
	}
}

module.exports = new CreateMunicaoController();
