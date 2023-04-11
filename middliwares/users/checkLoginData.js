const { errorMessagesEnum } = require('../../constants');
const { loginValidationSchema, asyncCatch } = require('../../utils');
const { AppError } = require('../../utils');

const checkLoginData = asyncCatch(async (req, res, next) => {
  const { error, value } = loginValidationSchema.validate(req.body);
  if (error) {
    return next(new AppError(400, errorMessagesEnum.WRONG_CREDENTIALS));
  }
  req.body = value;
  next();
});

module.exports = checkLoginData;
