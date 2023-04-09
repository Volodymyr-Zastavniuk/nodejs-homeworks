const { Contact } = require('../../service');

/**
 * delete contact by contact ID
 * @param {String} - id
 */
const removeContact = id => {
  return Contact.findByIdAndDelete(id);
};

module.exports = removeContact;
