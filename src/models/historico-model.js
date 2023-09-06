const { Model, DataTypes } = require('sequelize');

class HistoricoModel extends Model {
	static init(database) {
		super.init({
			userId: DataTypes.INTEGER,
			municaoId: DataTypes.INTEGER,
			dataCriacao: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW
			}
		}, {
			modelName: 'Historico',
			tableName: 'historico',
			timestamps: false,
			sequelize: database
		});
	}
}

module.exports = { HistoricoModel };
