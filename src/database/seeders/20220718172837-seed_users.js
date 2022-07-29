'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    let users = [];
    for (let i = 1; i < 5; i++) {
      users.push({
        id: i,
        username: `user${i}`,
        password: bcrypt.hashSync('123456', 10),
        email: `user${i}@mail.com`,
        created_At: new Date().toISOString(),
        updated_At: new Date().toISOString()
      }) // eslint-disable-line
    }
        await queryInterface.bulkInsert('users', users, {});  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});     
  }
};
