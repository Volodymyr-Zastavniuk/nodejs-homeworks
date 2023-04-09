const Joi = require('joi');

const contactValidationSchema = Joi.object()
  .options({
    abortEarly: false,
  })
  .keys({
    name: Joi.string().min(1).max(24).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });

module.exports = contactValidationSchema;
