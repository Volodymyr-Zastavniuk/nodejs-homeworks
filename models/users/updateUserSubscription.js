const { User } = require('../../service');

const updateUserSubscription = (id, body) => {
  return User.findByIdAndUpdate(id, body, { new: true });
};
module.exports = updateUserSubscription;
