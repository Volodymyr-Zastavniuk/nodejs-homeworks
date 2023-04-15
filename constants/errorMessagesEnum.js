const errorMessagesEnum = {
  NOT_LOGGED_IN: 'Not logged in..',
  MISSING_FIELDS: 'Missing required name field',
  MISSING_FAVORITE: 'Missing field favorite or wrong value',
  MISSING_SUBSCRIPTION: 'Missing field subscription or wrong value',
  CONTACT_NOT_EXIST: 'Contact does not exist',
  WRONG_CREDENTIALS: 'Email or password is wrong',
  EMAIL_IN_USE: 'Email in use..',
  NOT_ALLOWED: 'Your are not allowed to access this content',
  MULTER_ERROR: 'The request must contain only avatar file',
  EMAIL_NOT_VERIFIED: 'Please verify your email',
  NOT_FOUND: 'User not found..',
  VERIFIED: 'Verification has already been passed ',
};

module.exports = errorMessagesEnum;
