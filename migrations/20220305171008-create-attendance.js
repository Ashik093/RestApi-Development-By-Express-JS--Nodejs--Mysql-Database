'use strict';

const { sequelize } = require("../models");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Attendances', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            attendance_date: {
                allowNull: false,
                type: Sequelize.STRING
            },
            clock_in: {
                allowNull: false,
                type: Sequelize.STRING
            },
            clock_out: {
                allowNull: false,
                type: Sequelize.STRING
            },
            clock_in_out: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            time_late: {
                allowNull: false,
                type: Sequelize.STRING
            },
            early_leave: {
                allowNull: false,
                type: Sequelize.STRING
            },
            overtime: {
                allowNull: false,
                type: Sequelize.STRING
            },
            total_work: {
                allowNull: false,
                type: Sequelize.STRING
            },
            total_rest: {
                allowNull: false,
                type: Sequelize.STRING
            },
            status: {
                allowNull: false,
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Attendances');
    }
};