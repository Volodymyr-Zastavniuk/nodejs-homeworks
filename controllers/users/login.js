const { errorMessagesEnum } = require('../../constants');
const { addToken, loginUser } = require('../../models');
const { signToken } = require('../../service');
const { asyncCatch, AppError } = require('../../utils');

const login = asyncCatch(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await loginUser(email);

  if (!user)
    return next(new AppError(401, errorMessagesEnum.WRONG_CREDENTIALS));

  const passwordIsValid = await user.checkPassword(password, user.password);

  if (!passwordIsValid)
    return next(new AppError(401, errorMessagesEnum.WRONG_CREDENTIALS));

  user.password = undefined;

  const token = signToken(user.id);
  await addToken(user.id, token);

  res.status(200).json({
    user: { email: user.email, subscription: user.subscription },
    token,
  });
});

module.exports = login;
