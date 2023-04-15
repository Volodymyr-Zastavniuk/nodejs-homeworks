const { User } = require('../../service');

const getUserByVerificationToken = verificationToken => {
  return User.findOne({ verificationToken });
};

module.exports = getUserByVerificationToken;
