const internalError = (error) => {
	return {
		status: 500,
		message: `Erro interno: ${error}`
	};
};

const badRequest = (message) => {
	return {
		status: 400,
		message,
	};
};

const notFound= (message) => {
	return {
		status: 404,
		message
	}
}
module.exports = { internalError, badRequest, notFound};
