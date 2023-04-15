const { addUser } = require('../../models');
const { EmailService } = require('../../service');
const { asyncCatch } = require('../../utils');

const signup = asyncCatch(async (req, res) => {
  const newUser = await addUser(req.body);
  newUser.password = undefined;

  // const token = signToken(newUser.id);
  // await addToken(newUser.id, token);

  try {
    const verificationUrl = `${process.env.SERVER_URL}api/users/verify/${newUser.verificationToken}`;

    await new EmailService(newUser, verificationUrl).sendVerification();
  } catch (err) {
    console.log(err);
  }

  res
    .status(201)
    .json({ message: 'Verification link has been sent to your email.' });

  //   .json({
  //   user: { email: newUser.email, subscription: newUser.subscription },
  // });
});

module.exports = signup;
