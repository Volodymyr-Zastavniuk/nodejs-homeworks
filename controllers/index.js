const {
  getContactsList,
  getById,
  addNewContact,
  deleteContact,
  updateStatusAndContact,
} = require('./contacts');

const {
  signup,
  login,
  logout,
  getMe,
  updateSubscription,
  updateUserAvatar,
} = require('./users');

module.exports = {
  getContactsList,
  getById,
  addNewContact,
  deleteContact,
  updateStatusAndContact,
  signup,
  login,
  logout,
  getMe,
  updateSubscription,
  updateUserAvatar,
};
