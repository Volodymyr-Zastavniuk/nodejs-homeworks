const getMe = require('./getMe');
const login = require('./login');
const logout = require('./logout');
const sendVerificationLink = require('./sendVerificationLink');
const signup = require('./signup');
const updateSubscription = require('./updateSubscription');
const updateUserAvatar = require('./updateUserAvatar');
const verifyEmail = require('./verifyEmail');

module.exports = {
  signup,
  login,
  logout,
  getMe,
  updateSubscription,
  updateUserAvatar,
  verifyEmail,
  sendVerificationLink,
};
