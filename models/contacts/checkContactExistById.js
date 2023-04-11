const { Contact } = require('../../service');

const checkContactExistById = id => {
  return Contact.exists({ _id: id });
};

module.exports = checkContactExistById;
