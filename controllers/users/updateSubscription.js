const { updateUserData } = require('../../models');

const updateSubscription = async (req, res, next) => {
  const { user, body } = req;

  const { email, subscription } = await updateUserData(user, body);

  res.status(200).json({ user: { email, subscription } });
};

module.exports = updateSubscription;
