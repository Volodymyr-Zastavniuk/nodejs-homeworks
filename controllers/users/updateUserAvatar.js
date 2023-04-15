const { updateUserData } = require('../../models');
const { ImageService } = require('../../service');

const updateUserAvatar = async (req, res, next) => {
  const { file, user } = req;

  if (file) {
    const newAvatarUrl = await ImageService.save(req.file, req.user.id);
    const { email, avatarURL } = await updateUserData(user, {
      avatarURL: newAvatarUrl,
    });
    res.status(200).json({ user: { email, avatarURL } });
  }
};

module.exports = updateUserAvatar;
