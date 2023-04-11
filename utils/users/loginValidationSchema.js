const Joi = require('joi');
const { PASSWD_REGEX } = require('../../constants');

const loginValidationSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(PASSWD_REGEX).required(),
  });

module.exports = loginValidationSchema;
