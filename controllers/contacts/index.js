const { getById } = require('./getById');
const { getContactsList } = require('./getContactsList');
const { addNewContact } = require('./addNewContact');
const { deleteContact } = require('./deleteContact');
const { updateStatusAndContact } = require('./updateStatusAndContact');

module.exports = {
  getContactsList,
  getById,
  addNewContact,
  deleteContact,
  updateStatusAndContact,
};
