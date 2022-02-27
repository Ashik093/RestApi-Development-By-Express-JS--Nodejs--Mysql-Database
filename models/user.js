const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./../services/connection');

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    sequelize,
    modelName: 'User'
});
module.exports = User