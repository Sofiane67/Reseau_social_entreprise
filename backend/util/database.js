require("dotenv").config();

const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.PASSWORD, { dialect: process.env.SGBD, host: process.env.HOST});

module.exports = sequelize;