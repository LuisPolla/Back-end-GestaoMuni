const { UserModel } = require('../../models/user-model');
const bcrypt = require('bcrypt');
const { createToken } = require('../../utils/token');

class LoginController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      // Verifique se o email e a senha foram fornecidos
      if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
      }

      // Encontre o usuário pelo email na base de dados
      const user = await UserModel.findOne({ where: { email } });

      // Verifique se o usuário existe
      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      // Verifique a senha
      const isPasswordValid = await bcrypt.compare(senha, user.senha);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      // Gere um token de acesso
      const accessToken = createToken({ id: user.id, email: user.email, cpf: user.cpf });

      // Retorne o token e os dados do usuário
      return res.status(200).json({
        user: {
          nome: user.nome,
          email: user.email,
          cpf: user.cpf,
          registroMilitar: user.registroMilitar,
          dataNascimento: user.dataNascimento,
        },
        accessToken,
      });
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ error: 'Erro no login' });
    }
  }
}

module.exports = new LoginController();
