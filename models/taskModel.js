const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    status: {
        type: DataTypes.ENUM('pending', 'in-progress', 'completed'),
        defaultValue: 'pending',
    },
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        defaultValue: 'medium',
    },
});

Task.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Task, { foreignKey: 'user_id' });

module.exports = Task;


