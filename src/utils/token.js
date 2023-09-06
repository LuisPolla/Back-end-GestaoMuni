const jwt = require('jsonwebtoken');

const createToken = (data) => {
	const token = jwt.sign({ data }, process.env.TOKEN_SECRET_KEY, { expiresIn: process.env.TOKEN_EXPIRES_IN });
	return token;
};

module.exports = { createToken };
