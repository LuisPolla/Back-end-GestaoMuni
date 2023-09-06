const { Sequelize } = require('sequelize');
const configDatabase = require('./config/config');

const database = new Sequelize(configDatabase);

const { UserModel } = require('../models/user-model');
const { MunicaoModel } = require('../models/municao-model');
const { HistoricoModel } = require('../models/historico-model');

UserModel.init(database);
MunicaoModel.init(database);
HistoricoModel.init(database);

UserModel.associate(database.models);
MunicaoModel.associate(database.models);

module.exports = database;
