const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {
	static init(database) {
		super.init({
			nome: DataTypes.TEXT,
			email: DataTypes.TEXT,
			senha: DataTypes.TEXT,
			cpf: DataTypes.TEXT,
			dataNascimento: DataTypes.DATE,
			registroMilitar: DataTypes.TEXT,
		}, {
			modelName: 'User',
			tableName: 'users',
			timestamps: false,
			sequelize: database
		});
	}

	static associate(models) {
		this.belongsToMany(models.Municao, { foreignKey: 'userId', through: models.Historico });
	}
}

module.exports = { UserModel };
