const { User } = require('../../service');

const logoutUser = id => {
  return User.findByIdAndUpdate(id, { token: null }, { new: true });
};

module.exports = logoutUser;
