const { User } = require('../../service');

const checkUserExistsByEmail = email => {
  return User.exists({ email: email });
};

module.exports = checkUserExistsByEmail;
