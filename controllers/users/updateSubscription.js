const { updateUserSubscription } = require('../../models');

const updateSubscription = async (req, res, next) => {
  const { id } = req.user;

  const { email, subscription } = await updateUserSubscription(id, req.body);

  res.status(200).json({ user: { email, subscription } });
};

module.exports = updateSubscription;
