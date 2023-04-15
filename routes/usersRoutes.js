const express = require('express');
const router = express.Router();
const { asyncCatch } = require('../utils');

const {
  checkUserData,
  checkLoginData,
  checkToken,
  checkSubscription,
  uploadUserAvatar,
  checkTmpDir,
  checkAttachedFile,
} = require('../middlewares');

const {
  signup,
  login,
  logout,
  getMe,
  updateSubscription,
  updateUserAvatar,
  verifyEmail,
  sendVerificationLink,
} = require('../controllers');

router.post('/register', checkUserData, asyncCatch(signup));
router.post('/login', checkLoginData, asyncCatch(login));
router.post('/logout', checkToken, asyncCatch(logout));
router.get('/current', checkToken, asyncCatch(getMe));
router.patch(
  '/',
  checkToken,
  checkSubscription,
  asyncCatch(updateSubscription)
);
router.patch(
  '/avatars',
  checkToken,
  checkAttachedFile,
  asyncCatch(checkTmpDir),
  asyncCatch(uploadUserAvatar),
  asyncCatch(updateUserAvatar)
);

router.get('/verify/:verificationToken', asyncCatch(verifyEmail));
router.post('/verify', asyncCatch(sendVerificationLink));

module.exports = router;
