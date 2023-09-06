const { Router } = require('express');

//User
const createUserController = require('./controllers/user/create-user-controller');
const LoginController = require('./controllers/user/login-user-controller');

//Munição
const createMunicaoController = require('./controllers/municao/create-municao-controller');
const UpdateMunicaoController = require('./controllers/municao/update-municao-controller')
const { getAllMunicoes } = require('./controllers/municao/Getall-municao-controller');
const DeleteMunicaoController = require('./controllers/municao/delete-municao-controller'); // Importe o controlador de exclusão

//Histórico
const GetAllHistoricoController = require('./controllers/histórico/Getall-historico-controller');


const { authMiddleware } = require('./middlewares/authenticate-middleware');

const routes = Router();

// Users
routes.post('/register', createUserController.create);
routes.post('/login', LoginController.login);

// Munição
routes.post('/municao', authMiddleware, createMunicaoController.create);
routes.put('/municao/update/:id', authMiddleware, UpdateMunicaoController.update);
routes.get('/municao', authMiddleware, getAllMunicoes);
routes.delete('/municao/:id', authMiddleware, DeleteMunicaoController.delete);

// Histórico
routes.get('/historico', GetAllHistoricoController.getAll);


module.exports = { routes };
