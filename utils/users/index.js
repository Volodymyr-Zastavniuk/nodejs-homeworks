const loginValidationSchema = require('./loginValidationSchema');
const subscriptionValidationSchema = require('./subscriptionValidationSchema');
const newUserDataValidationSchema = require('./userValidationSchema');

module.exports = {
  newUserDataValidationSchema,
  loginValidationSchema,
  subscriptionValidationSchema,
};
