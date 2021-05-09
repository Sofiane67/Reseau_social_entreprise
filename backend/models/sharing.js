const {DataTypes} = require("sequelize");

const sequelize = require("../util/database");

const Sharing = sequelize.define("sharing", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Sharing;