const getMe = require('./getMe');
const login = require('./login');
const logout = require('./logout');
const signup = require('./signup');
const updateSubscription = require('./updateSubscription');
const updateUserAvatar = require('./updateUserAvatar');

module.exports = {
  signup,
  login,
  logout,
  getMe,
  updateSubscription,
  updateUserAvatar,
};
