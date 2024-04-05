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

      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const image = await Image.create({ originalname, filename, student_id });

        return res.json(image);
      } catch (err) {
        return res.status(400).json({
          errors: ['Aluno invalido'],
        });
      }
    });
  }
}

export default new ImageController();
