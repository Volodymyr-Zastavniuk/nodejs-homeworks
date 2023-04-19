const addToken = require('./addToken');
const addUser = require('./addUser');
const checkUserExistsByEmail = require('./checkUserExistsByEmail');
const getUserByEmail = require('./getUserByEmail');
const getUserById = require('./getUserById');
const getUserByVerificationToken = require('./getUserByVerificationToken');
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
  getUserByVerificationToken,
  getUserByEmail,
};
