const { User } = require('../src/user');

async function getAllUsers() {
  const users = await User.find();
 console.log(users);
}

getAllUsers();