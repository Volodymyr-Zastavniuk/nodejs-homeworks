const { errorMessagesEnum } = require('../../constants');
const { AppError, subscriptionValidationSchema } = require('../../utils');

const checkSubscription = (req, res, next) => {
  const { error, value } = subscriptionValidationSchema.validate(req.body);
  if (error) {
    return next(new AppError(400, errorMessagesEnum.MISSING_SUBSCRIPTION));
  }

  req.body = value;
  next();
};

module.exports = checkSubscription;
