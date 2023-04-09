const { User } = require('../../service');

const addToken = (id, token) => {
  return User.findByIdAndUpdate(id, { token }, { new: true });
};

module.exports = addToken;
