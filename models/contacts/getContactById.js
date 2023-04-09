const { Contact } = require('../../service');

/**
 * get contact by contact ID
 * @param {String } - id
 * @returns {Object }
 */
const getContactById = id => {
  return Contact.findById(id);
};

module.exports = getContactById;
