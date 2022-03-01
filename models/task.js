const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./../services/connection');
const User = require('./user')
class Task extends Model {}

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
Task.User = Task.belongsTo(User);
Task.belongsTo(User, {
    foreignKey: 'created_by',
    as: "createdBy",
    joinTableName: "users"
});
module.exports = Task