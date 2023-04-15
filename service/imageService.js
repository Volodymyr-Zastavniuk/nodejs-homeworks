const multer = require('multer');
const Jimp = require('jimp');
const uuid = require('uuid').v4;
const path = require('path');
const fse = require('fs-extra');

const { AppError } = require('../utils');

class ImageService {
  static uploadTempDir = path.join(process.cwd(), 'tmp');

  static async checkDir() {
    await fse.ensureDir(this.uploadTempDir);
  }

  static uploadAvatar() {
    console.log('ImageService UPLOAD');
    const multerStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, this.uploadTempDir);
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });

    const multerFilter = (req, file, callbackFn) => {
      console.log('ImageService FILTER');
      if (file.mimetype.startsWith('image')) {
        callbackFn(null, true);
      } else {
        callbackFn(new AppError(400, 'Upload images only..'), false);
      }
    };
    console.log('ImageService RETURN');
    return multer({
      storage: multerStorage,
      fileFilter: multerFilter,
      limits: {
        fields: 0,
        fileSize: 2 * 1024 * 1024, // 1 Mb limit size
        files: 1,
      },
    }).single('avatar');
  }

  static async save(file, id) {
    const fileName = `${id}-${uuid()}.jpeg`; //or Jimp image.getExtension()
    const storeAvatar = path.join(process.cwd(), 'public', 'avatars', id);
    const tmpFile = file.path;

    await fse.emptyDir(storeAvatar);

    const image = await Jimp.read(tmpFile);
    image.resize(250, 250).write(path.join(storeAvatar, fileName));

    await fse.remove(tmpFile);

    return path.join('/avatars/', id, fileName);
  }
}

module.exports = ImageService;
