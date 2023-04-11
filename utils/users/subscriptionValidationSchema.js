const Joi = require('joi');
const { userSubscriptionEnum } = require('../../constants');

const subscriptionValidationSchema = Joi.object().keys({
  subscription: Joi.string()
    .valid(...Object.values(userSubscriptionEnum))
    .required(),
});

module.exports = subscriptionValidationSchema;
