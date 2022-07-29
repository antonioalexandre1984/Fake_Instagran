'use strict';

module.exports = (sequelize,DataTypes ) => {
    const User = sequelize.define('User', {
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
            allowNull: true,
        },

        name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {    
    
        tableName: "users",
        timestamps: true,
    });     
    return User;
}