const { User } = require('../../service');

const getUserByEmail = email => {
  return User.findOne({ email });
};

module.exports = getUserByEmail;
