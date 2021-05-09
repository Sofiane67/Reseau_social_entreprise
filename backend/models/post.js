const {DataTypes}  = require("sequelize");

const sequelize = require("../util/database");

const Post = sequelize.define("post", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Post;