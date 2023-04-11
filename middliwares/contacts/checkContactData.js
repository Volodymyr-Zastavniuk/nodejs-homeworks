const { errorMessagesEnum } = require('../../constants');
const { contactValidationSchema } = require('../../utils');
const { AppError } = require('../../utils');

const checkContactData = (req, res, next) => {
  const { error, value } = contactValidationSchema.validate(req.body);
  if (error) {
    return next(new AppError(400, errorMessagesEnum.MISSING_FIELDS));
  }
  req.body = value;
  next();
};

module.exports = checkContactData;
