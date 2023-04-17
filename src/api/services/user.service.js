const users = require('../../mock/user.json');

const getAllUsers = async () => users;

const getUserById = async (id) => users.find(user => user.id === id);

module.exports = { getAllUsers, getUserById };
