'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('historico', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'users', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			municaoId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'municao', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			dataCriacao: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			}
		});
	},

	// eslint-disable-next-line no-unused-vars
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('historico');
	}
};
