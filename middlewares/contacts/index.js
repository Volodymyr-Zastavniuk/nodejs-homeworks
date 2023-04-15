const checkFavorite = require('./checkFavorite');
const checkContactId = require('./checkContactId');
const checkContactData = require('./checkContactData');
const checkContactQuery = require('./checkContactQuery');
const checkContactOwner = require('./checkContactOwner');

module.exports = {
  checkContactData,
  checkContactId,
  checkFavorite,
  checkContactQuery,
  checkContactOwner,
};
