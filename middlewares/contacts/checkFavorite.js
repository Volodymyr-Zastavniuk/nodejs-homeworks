const { errorMessagesEnum } = require('../../constants');
const { AppError } = require('../../utils');

const checkFavorite = (req, res, next) => {
  const isBoolean = 'boolean' === typeof req.body.favorite;

  if (!isBoolean) {
    return next(new AppError(400, errorMessagesEnum.MISSING_FAVORITE));
  }

  next();
};

module.exports = checkFavorite;
