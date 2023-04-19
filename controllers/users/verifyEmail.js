const { errorMessagesEnum } = require('../../constants');
const { getUserByVerificationToken, updateUserData } = require('../../models');
const { EmailService } = require('../../service');
const { AppError } = require('../../utils');

const verifyEmail = async (req, res, next) => {
  const { verificationToken } = req.params;

  const userExists = await getUserByVerificationToken(verificationToken);

  if (!userExists) return next(new AppError(400, errorMessagesEnum.NOT_FOUND));

  if (userExists.verify) {
    return next(new AppError(400, errorMessagesEnum.VERIFIED));
  }

  const verifiedUser = await updateUserData(userExists, {
    verificationToken: null,
    verify: true,
  });

  try {
    const helloUrl = `${process.env.SERVER_URL}api/users/login`;

    await new EmailService(verifiedUser, helloUrl).sendHello();
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ message: 'Email verification is successful.' });
  next();
};

module.exports = verifyEmail;
