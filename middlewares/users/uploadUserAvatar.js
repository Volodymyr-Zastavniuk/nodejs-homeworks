const { errorMessagesEnum } = require('../../constants');
const { ImageService } = require('../../service');
const { AppError } = require('../../utils');

const uploadUserAvatar = async (req, res, next) => {
  const multerUploadUserAvatar = ImageService.uploadAvatar();

  multerUploadUserAvatar(req, res, function (err) {
    if (err) {
      console.log('Multer error:', err.message);
      return next(new AppError(400, errorMessagesEnum.MULTER_ERROR));
    }
    next();
  });
};

module.exports = uploadUserAvatar;
