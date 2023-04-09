const { Contact } = require('../../service');

/**
 * update contact by contact ID
 * @param {String} - id,
 * @param {Object} - body
 * @returns {Object }
 */
const updateContact = (id, body) => {
  return Contact.findByIdAndUpdate(id, body, { new: true });
};
module.exports = updateContact;
