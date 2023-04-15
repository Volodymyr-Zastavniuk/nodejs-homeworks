const { errorMessagesEnum } = require('../../constants');
const { AppError } = require('../../utils');

//to check if file is attached
const checkAttachedFile = (req, res, next) => {
  const isContent = Number(req.headers['content-length']);
  if (!isContent) {
    return next(new AppError(400, errorMessagesEnum.MULTER_ERROR));
  }
  next();
};

module.exports = checkAttachedFile;
