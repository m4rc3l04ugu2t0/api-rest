import 'dotenv/config';
import jwt from 'jsonwebtoken';
import User from '../models/Users.js';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login invalido'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    console.log('user:', user, 'token:', data);

    if (!user) {
      return res.status(401).json({
        errors: ['Usuario invalido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['token invalido'],
    });
  }
};
