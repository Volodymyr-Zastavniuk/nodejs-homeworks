const { removeContact } = require('../../models');

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;

  await removeContact(contactId);
  res.status(200).json({ message: 'contact deleted' });
};

module.exports = {
  deleteContact,
};
