const { Model, DataTypes } = require('sequelize');

class MunicaoModel extends Model {
	static init(database) {
		super.init({
			modelo: DataTypes.TEXT,
			calibragem: DataTypes.FLOAT,
			dataFabriacao: DataTypes.DATE,
			estadoConservacao: DataTypes.TEXT,
			quatidadeEmEstoque: DataTypes.INTEGER,
			tipoPonta: DataTypes.TEXT,
			material: DataTypes.TEXT,
			peso: DataTypes.FLOAT,
			empresaFabricante: DataTypes.TEXT
		}, {
			modelName: 'Municao',
			tableName: 'municao',
			timestamps: false,
			sequelize: database
		});
	}

	static associate(models) {
		this.belongsToMany(models.User, { foreignKey: 'municaoId', through: models.Historico });
	}
}

module.exports = { MunicaoModel };
