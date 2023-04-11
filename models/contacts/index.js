const addContact = require('./addContact');
const checkContactExistById = require('./checkContactExistById');
const getContactById = require('./getContactById');
const listContacts = require('./listContacts');
const removeContact = require('./removeContact');
const totalCount = require('./totalCount');
const updateContact = require('./updateContact');

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  checkContactExistById,
  totalCount,
};
