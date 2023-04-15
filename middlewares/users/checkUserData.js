const { errorMessagesEnum } = require('../../constants');
const { checkUserExistsByEmail } = require('../../models');
const { newUserDataValidationSchema, asyncCatch } = require('../../utils');
const { AppError } = require('../../utils');

const checkUserData = asyncCatch(async (req, res, next) => {
  const { error, value } = newUserDataValidationSchema.validate(req.body);
  if (error) {
    return next(new AppError(400, errorMessagesEnum.MISSING_FIELDS));
  }

  const userExists = await checkUserExistsByEmail(value.email);

  if (userExists)
    return next(new AppError(409, errorMessagesEnum.EMAIL_IN_USE));

  req.body = value;
  next();
});

module.exports = checkUserData;
