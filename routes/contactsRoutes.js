const express = require('express');
const { asyncCatch } = require('../utils');
const {
  getContactsList,
  getById,
  addNewContact,
  deleteContact,
  updateStatusAndContact,
} = require('../controllers');

const {
  checkContactData,
  checkContactId,
  checkFavorite,
  checkToken,
  checkContactQuery,
  checkContactOwner,
} = require('../middlewares');

const router = express.Router();

router.use(checkToken);

router.get('/', checkContactQuery, asyncCatch(getContactsList));

router.get(
  '/:contactId',
  checkContactId,
  checkContactOwner,
  asyncCatch(getById)
);

router.post('/', checkContactData, asyncCatch(addNewContact));

router.delete(
  '/:contactId',
  checkContactId,
  checkContactOwner,
  asyncCatch(deleteContact)
);

router.patch(
  '/:contactId/favorite',
  checkContactId,
  checkFavorite,
  checkContactOwner,
  asyncCatch(updateStatusAndContact)
);

module.exports = router;
