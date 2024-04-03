import User from "../models/Users.js";

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body)
      return res.json(newUser)
    } catch(error) {
      return res.status(400).json({
        errors: error.errors.map(e => e.message)
      })
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll()
      return res.json(users)
    } catch(error) {
      return res.json(null)
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      return res.json(user)
    } catch(error) {
      return res.json(null)
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['id não enviado']
        })
      }

      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não encontrado!']
        })
      }

      const newData = await user.update(req.body)

      return res.json(newData)
    } catch(error) {
      return res.status(400).json({
        errors: error.errors.map(e => e.message)
      })
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['id não enviado']
        })
      }

      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não encontrado!']
        })
      }

      await user.destroy(id)

      return res.json(user)
    } catch(error) {
      return res.status(400).json({
        errors: error.errors.map(e => e.message)
      })
    }
  }

}

export default new UserController()
