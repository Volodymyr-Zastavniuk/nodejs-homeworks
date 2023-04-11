const { Contact } = require('../../service');

const totalCount = options => {
  return Contact.count(options);
};

module.exports = totalCount;
