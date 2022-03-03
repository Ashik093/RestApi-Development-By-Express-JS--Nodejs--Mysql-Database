'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Timesheets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            taskId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            cost: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Timesheets');
    }
};