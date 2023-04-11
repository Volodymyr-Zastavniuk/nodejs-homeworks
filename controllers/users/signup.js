const { addUser } = require('../../models');
const { addToken } = require('../../models');
const { signToken } = require('../../service');
const { asyncCatch } = require('../../utils');

addToken;

const signup = asyncCatch(async (req, res) => {
  const newUser = await addUser(req.body);
  newUser.password = undefined;

  const token = signToken(newUser.id);
  await addToken(newUser.id, token);

  res.status(201).json({
    user: { email: newUser.email, subscription: newUser.subscription },
    token,
  });
});

module.exports = signup;
