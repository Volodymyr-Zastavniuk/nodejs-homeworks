const { asyncCatch, AppError } = require('../../utils');
const { getUserById } = require('../../models');
const { verifyToken } = require('../../service');
const { errorMessagesEnum } = require('../../constants');

const checkToken = asyncCatch(async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith('Bearer') &&
    req.headers.authorization.split(' ')[1];
  if (!token) return next(new AppError(401, errorMessagesEnum.NOT_LOGGED_IN));

  let decoded;

  try {
    decoded = verifyToken(token);
  } catch (err) {
    console.log(err.message);
    return next(new AppError(401, errorMessagesEnum.NOT_LOGGED_IN));
  }

  const currentUser = await getUserById(decoded.id);
  // || currentUser.token !== token  - to compare token in database with token in authorization header
  if (!currentUser || currentUser.token !== token)
    return next(new AppError(401, errorMessagesEnum.NOT_LOGGED_IN));

  req.user = currentUser;
  next();
});

module.exports = checkToken;
