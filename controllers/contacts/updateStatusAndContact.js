const { updateContact } = require('../../models');

const updateStatusAndContact = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await updateContact(contactId, req.body);
  res.status(200).json({ contact });
};

module.exports = {
  updateStatusAndContact,
};
