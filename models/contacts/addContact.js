const { Contact } = require('../../service');

const addContact = body => {
  return Contact.create(body);
};

module.exports = addContact;
