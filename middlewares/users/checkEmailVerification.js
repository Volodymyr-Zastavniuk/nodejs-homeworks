const checkEmailVerification = (req, res, next) => {
  const isVerified = req.user.verify;

  if (!isVerified)
    return next(new AppError(404, errorMessagesEnum.EMAIL_NOT_VERIFIED));

  next();
};

module.exports = checkEmailVerification;
