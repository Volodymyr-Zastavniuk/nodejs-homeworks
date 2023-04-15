const { errorMessagesEnum } = require('../../constants');
const { getUserByEmail } = require('../../models');
const { EmailService } = require('../../service');
const { AppError } = require('../../utils');

const sendVerificationLink = async (req, res, next) => {
  const { email } = req.body;

  if (!email) return next(new AppError(400, errorMessagesEnum.MISSING_FIELDS));

  const userExists = await getUserByEmail(email);

  if (!userExists) return next(new AppError(400, errorMessagesEnum.NOT_FOUND));

  if (userExists.verify) {
    return next(new AppError(400, errorMessagesEnum.VERIFIED));
  }

  try {
    const verificationUrl = `${process.env.SERVER_URL}api/users/verify/${userExists.verificationToken}`;

    await new EmailService(userExists, verificationUrl).sendVerification();
  } catch (err) {
    console.log(err);
  }

  res
    .status(200)
    .json({ message: 'Verification link has been sent to your email.' });
};

module.exports = sendVerificationLink;
