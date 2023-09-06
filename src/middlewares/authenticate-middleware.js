const jwt = require('jsonwebtoken');


// Recebe o token da requisição
// Verificar se o token condiz o token seccret, se não "Usuário não autorizado"
function authMiddleware(request, response, next) {
	try {
		const token = request.headers.authorization;

		if (token) {
			const accessToken = token.split(' ')[1];
			jwt.verify(
				accessToken,
				process.env.TOKEN_SECRET_KEY,
				(error, user) => {
					if (error) {
						return response.status(401).json({
							error: 'Usuário não autorizado!'
						});
					}
					request.userId = user.data.id;
					next();
				}
			);
		} else {
			return response.status(401).json({
				error: 'Usuário não autorizado!'
			});
		}
	} catch (error) {
		return response.status(500).json({
			error: `Erro interno: ${error}`
		});
	}
}

module.exports = { authMiddleware };
