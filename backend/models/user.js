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
        validate: {
            notNull: true,  
            notEmpty: true,
            is: /^[A-Za-z ]+$/
        }
    },
    firstName: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
            is: /^[A-Za-z ]+$/
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
            isEmail: true,
        },
        unique : true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    }
});

module.exports = User;