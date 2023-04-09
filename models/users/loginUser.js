const { User } = require('../../service');

const loginUser = email => {
  return User.findOne({ email }).select('+password');
};

module.exports = loginUser;
