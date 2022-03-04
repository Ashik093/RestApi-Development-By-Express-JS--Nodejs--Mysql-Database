'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Task.belongsTo(models.User);
            Task.belongsTo(models.User, {
                foreignKey: 'created_by',
                as: "createdBy",
                joinTableName: "users"
            });
        }
    }
    Task.init({
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_by: {
            type: DataTypes.BIGINT,
            allowNull: false
        },

    }, {
        tableName: 'tasks',
        sequelize,
        modelName: 'Task'
    });
    return Task;
};