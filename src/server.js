require('./database');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { routes } = require('./routes');

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

// Rota para obter o URL da API
server.get('/api-url', (req, res) => {
	const apiURL = 'https://api-gestaomuni.onrender.com';
	res.json({ apiURL });
  });

server.listen(8080, () => {
	console.log('Server started!');
});
