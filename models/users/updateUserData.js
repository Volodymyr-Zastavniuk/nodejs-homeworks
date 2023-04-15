// const { User } = require('../../service');

const updateUserData = async (user, body) => {
  Object.keys(body).forEach(key => {
    user[key] = body[key];
  });
  return await user.save();

  // return User.findByIdAndUpdate(id, body, { new: true });
};
module.exports = updateUserData;
