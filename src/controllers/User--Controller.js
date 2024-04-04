import User from '../models/Users.js';

class UserController {
  async store(req, res) {
    try {
      await User.create(req.body);
      return res.json('Usuario criado com sucesso');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não encontrado!'],
        });
      }

      return res.json('Usuario atualizado com sucesso');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não encontrado!'],
        });
      }

      await user.destroy(req.userId);

      return res.json('Usuario deletado');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
