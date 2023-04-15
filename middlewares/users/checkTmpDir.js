const { ImageService } = require('../../service');

const checkTmpDir = async (req, res, next) => {
  await ImageService.checkDir();
  next();
};

module.exports = checkTmpDir;
