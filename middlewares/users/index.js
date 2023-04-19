const checkAttachedFile = require('./checkAttachedFile');
const checkEmailVerification = require('./checkEmailVerification');
const checkLoginData = require('./checkLoginData');
const checkSubscription = require('./checkSubscription');
const checkTmpDir = require('./checkTmpDir');
const checkToken = require('./checkToken');
const checkUserData = require('./checkUserData');
const uploadUserAvatar = require('./uploadUserAvatar');

module.exports = {
  checkUserData,
  checkLoginData,
  checkToken,
  checkSubscription,
  uploadUserAvatar,
  checkTmpDir,
  checkAttachedFile,
  checkEmailVerification,
};
