const { User } = require('../../service');

const addUser = body => {
  return User.create(body);
};

module.exports = addUser;
