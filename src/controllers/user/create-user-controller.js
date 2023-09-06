const { internalError, badRequest } = require('../../utils/http-helper');
const { validateCPF, validateEmail, validateDate } = require('../../utils/validations');
const { stringToDate } = require('../../utils/formats');
const { UserModel } = require('../../models/user-model');
const bcrypt = require('bcrypt');
const { createToken } = require('../../utils/token');

class CreateUserController {
	async create(req, res) {
		try {
			const { nome, cpf, email, senha, dataNascimento, registroMilitar } = req.body;
			// Verificar se os campos foram passados
			if (!nome || !cpf || !email || !senha || !dataNascimento || !registroMilitar) {
				return res.status(400).json({
					error: badRequest('Dados incorretos: nome, cpf, email, senha, data de nascimento, registro militar')
				});
			}
			// Verifcar cpf é valido
			if (!validateCPF(cpf)) {
				return res.status(400).json({
					error: badRequest('CPF inválido')
				});
			}
			// Busca na tabela se o cpf já está cadastrado, se tiver mostrar erro
			const cpfAlreadyExists = await UserModel.findOne({
				where: {
					cpf: cpf.replaceAll('.', '').replace('-', ''),
				}
			});
			if (cpfAlreadyExists) {
				return res.status(400).json({
					error: badRequest('CPF já cadastrado')
				});
			}
			// Verificar se email é  valido
			if (!validateEmail(email)) {
				return res.status(400).json({
					error: badRequest('E-mail inválido')
				});
			}
			// Busca na tabela se o email já está cadastrado, se tiver mostrar erro
			const emailAlreadyExists = await UserModel.findOne({
				where: {
					email
				}
			});
			if (emailAlreadyExists) {
				return res.status(400).json({
					error: badRequest('E-mail já cadastrado')
				});
			}
			// verificar se data de nascimento é válido
			const dateFormated = stringToDate(dataNascimento);
			if (!validateDate(dateFormated)) {
				return res.status(400).json({
					error: badRequest('Data de nascimento inválida')
				});
			}
			// Buscar na tabela se o registro militar já está cadastro, se tiver mostrar erro
			const registroAlreadyExists = await UserModel.findOne({
				where: {
					registroMilitar
				}
			});
			if (registroAlreadyExists) {
				return res.status(400).json({
					error: badRequest('Registro militar já cadastrado')
				});
			}
			
			// Criptografar senha

			const passwordHashed = await bcrypt.hash(senha, Number(process.env.SALT));
			// Criar usuário no banco, formatar dados
			const user = await UserModel.create({
				nome,
				cpf: cpf.replaceAll('.', '').replace('-', ''),
				email,
				senha: passwordHashed,
				dataNascimento: dateFormated,
				registroMilitar
			});
			// Criar e retornar token
			const accessToken = createToken({
				id: user.id,
				email: user.email,
				cpf: user.cpf
			});
			return res.status(201).json({
				user: {
					nome: user.nome,
					email: user.email,
					cpf: user.cpf,
					registroMilitar: user.registroMilitar,
					dataNascimento: user.dataNascimento
				},
				accessToken
			});
		} catch (error) {
			return res.status(500).json({
				error: internalError(error)
			});
		}
	}
}

module.exports = new CreateUserController();
