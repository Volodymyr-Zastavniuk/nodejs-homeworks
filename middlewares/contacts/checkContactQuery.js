const { errorMessagesEnum } = require('../../constants');
const { contactQueryValidationSchema } = require('../../utils');
const { AppError } = require('../../utils');

const checkContactQuery = (req, res, next) => {
  const { page = 1, limit = 5, favorite } = req.query;

  const queryForValidation = { page: +page, limit: +limit, favorite };

  const { error, value } =
    contactQueryValidationSchema.validate(queryForValidation);
  if (error) {
    console.log(error.details?.map(i => i.message));
    return next(new AppError(400, errorMessagesEnum.MISSING_FIELDS));
  }

  req.query = value;
  next();
};

module.exports = checkContactQuery;
