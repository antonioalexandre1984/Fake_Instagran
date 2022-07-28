'use strict';

module.exports = (Sequelize,DataTypes ) => {
    const User = Sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },

    });
    return User;
}