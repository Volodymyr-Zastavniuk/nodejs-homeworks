const { logoutUser } = require('../../models');
const { asyncCatch } = require('../../utils');

const logout = asyncCatch(async (req, res, next) => {
  const { id } = req.user;

  await logoutUser(id);

  res.sendStatus(204);
});

module.exports = logout;
