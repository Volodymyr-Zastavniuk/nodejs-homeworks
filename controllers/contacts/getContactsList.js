const { listContacts, totalCount } = require('../../models');

const getContactsList = async (req, res) => {
  const { limit, page, favorite } = req.query;
  const owner = req.user;
  const favoriteOption = typeof favorite === 'boolean' ? { favorite } : {};

  const findOptions = {
    $and: [{ owner }, favoriteOption],
  };
  const skip = (page - 1) * limit;

  const contacts = await listContacts(findOptions, skip, limit);
  const total = await totalCount(findOptions);

  res.status(200).json({ total, contacts });
};

module.exports = {
  getContactsList,
};
