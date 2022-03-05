'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Attendance extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Attendance.belongsTo(models.User)
        }
    }
    Attendance.init({
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        attendance_date: {
            allowNull: false,
            type: DataTypes.STRING
        },
        clock_in: {
            allowNull: false,
            type: DataTypes.STRING
        },
        clock_out: {
            allowNull: false,
            type: DataTypes.STRING
        },
        clock_in_out: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        time_late: {
            allowNull: false,
            type: DataTypes.STRING
        },
        early_leave: {
            allowNull: false,
            type: DataTypes.STRING
        },
        overtime: {
            allowNull: false,
            type: DataTypes.STRING
        },
        total_work: {
            allowNull: false,
            type: DataTypes.STRING
        },
        total_rest: {
            allowNull: false,
            type: DataTypes.STRING
        },
        status: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Attendance',
    });
    return Attendance;
};