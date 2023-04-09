const Joi = require('joi');
const { userSubscriptionEnum, PASSWD_REGEX } = require('../../constants');

const newUserDataValidationSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(PASSWD_REGEX).required(),
    subscription: Joi.string().valid(...Object.values(userSubscriptionEnum)),
  });

module.exports = newUserDataValidationSchema;
