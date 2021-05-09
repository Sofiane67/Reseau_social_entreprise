const {DataTypes} = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type : DataTypes.STRING(15),
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true
    },
    password: {
        type: DataTypes.STRING(12),
        allowNull: false
    }
});

module.exports = User;