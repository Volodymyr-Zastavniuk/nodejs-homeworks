const Joi = require('joi');

const contactQueryValidationSchema = Joi.object()
  .options({
    abortEarly: false,
  })
  .keys({
    page: Joi.number(),
    limit: Joi.number(),
    favorite: Joi.boolean(),
  });

module.exports = contactQueryValidationSchema;
