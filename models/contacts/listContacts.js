const { Contact } = require('../../service');

const listContacts = (options, skip, limit) => {
  return Contact.find(options).skip(skip).limit(limit).select('-_id');
};

module.exports = listContacts;
