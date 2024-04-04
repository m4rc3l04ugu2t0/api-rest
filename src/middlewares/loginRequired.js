import 'dotenv/config'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login invalido']
    })
  }

  const [ text, token ] = authorization.split(' ')
  console.log(token)

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET)
    const { id, email } = data
    req.userId = id
    req.userEmail = email
    return next()
  } catch(error) {
    return res.status(401).json({
      errors: ['token invalido']
    })
  }

}
