require('./database');

const { HistoricoModel } = require('./models/historico-model');
const { MunicaoModel } = require('./models/municao-model');
const { UserModel } = require('./models/user-model');

(async () => {
	try {
		// Criar um usuário
		const user = await UserModel.create({
			nome: 'Luis',
			cpf: '123456789',
			email: 'teste@mail.com',
			senha: '123',
			dataNascimento: new Date('2000-01-20'),
			registroMilitar: 'PM'
		});
		// // Criar uma munição
		// const municao = await MunicaoModel.create({
		// 	modelo: 'Teste',
		// 	calibragem: 10,
		// 	dataFabriacao: new Date('2001-10-14'),
		// 	estadoConservacao: 'boa',
		// 	quatidadeEmEstoque: 100,
		// 	tipoPonta: 'fina',
		// 	material: 'aço',
		// 	peso: 10.0,
		// 	empresaFabricante: 'TESTE',
		// });
		// // Criar um histórico
		// await HistoricoModel.create({
		// 	userId: user.id,
		// 	municaoId: municao.id
		// });
	} catch (error) {
		console.error(error);
	}
})();
