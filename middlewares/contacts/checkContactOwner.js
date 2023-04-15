const { errorMessagesEnum } = require('../../constants');
const { getContactById } = require('../../models');
const { AppError, asyncCatch } = require('../../utils');

const checkContactOwner = asyncCatch(async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId).populate('owner');

  const isOwner = contact.owner.id === req.user.id;

  if (!isOwner) {
    return next(new AppError(403, errorMessagesEnum.NOT_ALLOWED));
  }
  req.contact = contact;
  next();
});

module.exports = checkContactOwner;
