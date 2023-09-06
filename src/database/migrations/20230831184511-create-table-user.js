'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			nome: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			email: {
				type: Sequelize.TEXT,
				allowNull: false,
				unique: true,
			},
			senha: {
				type: Sequelize.TEXT,
				allowNull: false
			},
			cpf: {
				type: Sequelize.TEXT,
				allowNull: false,
				unique: true
			},
			dataNascimento: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			registroMilitar: {
				type: Sequelize.TEXT,
				allowNull: false,
				unique: true
			}
		});
	},

	// eslint-disable-next-line no-unused-vars
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	}
};
