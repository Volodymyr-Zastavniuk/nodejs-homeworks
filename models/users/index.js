const addToken = require('./addToken');
const addUser = require('./addUser');
const checkUserExistsByEmail = require('./checkUserExistsByEmail');
const getUserById = require('./getUserById');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const updateUserData = require('./updateUserData');
module.exports = {
  addUser,
  addToken,
  loginUser,
  logoutUser,
  getUserById,
  checkUserExistsByEmail,
  updateUserData,
};
