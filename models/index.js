const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  checkContactExistById,
  totalCount,
} = require('./contacts');

const {
  addUser,
  addToken,
  loginUser,
  logoutUser,
  getUserById,
  checkUserExistsByEmail,
  updateUserData,
  getUserByVerificationToken,
  getUserByEmail,
} = require('./users');

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  totalCount,
  checkContactExistById,
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
