import multer from 'multer';
import multerConfig from '../config/multer--config.js';

import Image from '../models/Images.js';

const upload = multer(multerConfig).single('image');

class ImageController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const image = await Image.create({ originalname, filename });

      return res.json(image);
    });
  }
}

export default new ImageController();
