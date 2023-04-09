const express = require('express');
const {
  signup,
  login,
  logout,
  getMe,
  updateSubscription,
} = require('../controllers');
const {
  checkUserData,
  checkLoginData,
  checkToken,
  checkSubscription,
} = require('../middliwares');
const { asyncCatch } = require('../utils');

const router = express.Router();

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

module.exports = router;
