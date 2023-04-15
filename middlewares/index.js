const {
  checkContactData,
  checkContactId,
  checkFavorite,
  checkContactQuery,
  checkContactOwner,
} = require('./contacts');
const {
  checkUserData,
  checkLoginData,
  checkToken,
  checkSubscription,
  uploadUserAvatar,
  checkTmpDir,
  checkAttachedFile,
} = require('./users');

module.exports = {
  checkContactData,
  checkContactQuery,
  checkContactOwner,
  checkContactId,
  checkFavorite,
  checkUserData,
  checkLoginData,
  checkToken,
  checkSubscription,
  uploadUserAvatar,
  checkTmpDir,
  checkAttachedFile,
};
