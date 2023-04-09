const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  checkContactExistById,
} = require('./contacts');

const {
  addUser,
  addToken,
  loginUser,
  logoutUser,
  getUserById,
  checkUserExistsByEmail,
  updateUserSubscription,
} = require('./users');

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  checkContactExistById,
  addUser,
  addToken,
  loginUser,
  logoutUser,
  getUserById,
  checkUserExistsByEmail,
  updateUserSubscription,
};
