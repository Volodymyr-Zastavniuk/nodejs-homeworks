const { Types } = require('mongoose');
const { AppError, asyncCatch } = require('../../utils');
const { checkContactExistById } = require('../../models');
const { errorMessagesEnum } = require('../../constants');

const checkContactId = asyncCatch(async (req, res, next) => {
  const { contactId } = req.params;

  const idIsValid = Types.ObjectId.isValid(contactId);

  if (!idIsValid)
    return next(new AppError(404, errorMessagesEnum.CONTACT_NOT_EXIST));

  const userExists = await checkContactExistById(contactId);

  if (!userExists)
    return next(new AppError(404, errorMessagesEnum.CONTACT_NOT_EXIST));

  next();
});

module.exports = checkContactId;
