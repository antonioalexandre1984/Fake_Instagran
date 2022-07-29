'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable
      ('users',{
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        username: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        },
        email: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        unique:true,
        },
        name: {
          type: Sequelize.DataTypes.STRING(200),
          allowNull: false,
        },
        password: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
        },
        avatar: { 
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
          field: 'created_at',
        },
        updatedAt: {
          type: Sequelize.DataTypes.DATE,
          field: 'updated_at'
        }
      });
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('users');
  }
};
