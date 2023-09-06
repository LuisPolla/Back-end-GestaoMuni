'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('municao', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			modelo: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			calibragem: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			dataFabriacao: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			estadoConservacao: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			quatidadeEmEstoque: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			tipoPonta: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			material: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			peso: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			empresaFabricante: {
				type: Sequelize.TEXT,
				allowNull: false,
			}
		});
	},
	// eslint-disable-next-line no-unused-vars
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('muinicao');
	}
};
