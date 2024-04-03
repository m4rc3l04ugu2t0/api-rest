import 'dotenv/config.js'
import User from "../models/Users.js";
import jwt from "jsonwebtoken"

class TokenController {
  async store(req, res) {
    const  { email = '', password = '' } = req.body

  if (!email || !password) {
    return res.status(401).json({
      errors: ['Credenciais invalidas']
    })
  }

  const user = await User.findOne({ where: { email }})

  if (!user) {
    return res.status(401).json({
      errors: ['User invalido']
    })
  }

  if (!user.passwordIsValid(password)) {
    return res.status(401).json({
      errors: ['Senha invalida']
    })
  }

  const { id } = user

  const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION })

  return res.json({ token });
  }
}

export default new TokenController();
