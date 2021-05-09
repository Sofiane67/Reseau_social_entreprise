const {DataTypes} = require("sequelize");

const sequelize = require("../util/database");

const Forum = sequelize.define("forum", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    forumType: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Forum;