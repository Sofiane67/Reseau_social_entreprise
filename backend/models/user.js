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
        allowNull: false,
        isAlpha: true
    },
    firstName: {
        type: DataTypes.STRING(15),
        allowNull: false,
        isAlpha: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique : true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;