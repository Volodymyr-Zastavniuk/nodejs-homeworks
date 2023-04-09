const { User } = require('../../service');

const getUserById = id => {
  return User.findById(id);
};

module.exports = getUserById;
