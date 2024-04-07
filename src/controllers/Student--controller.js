import Student from '../models/Students.js';
import Image from '../models/Images.js';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'first_name', 'second_name', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [Image, 'id', 'DESC']],
      include: {
        model: Image,
        attributes: ['url', 'filename'],
      },
    });

    return res.json(students);
  }

  async store(req, res) {
    try {
      await Student.create(req.body);

      return res.json('Aluno resgistrado com sucesso');
    } catch (error) {
      console.log(error);
      // return res.status(401).json({
      //   errors: error.errors.map((e) => e.message),
      // });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['Invalido'],
        });
      }
      const student = await Student.findByPk(id, {
        attributes: ['id', 'first_name', 'second_name', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Image, 'id', 'DESC']],
        include: {
          model: Image,
          attributes: ['url', 'filename'],
        },
      });

      if (!student) {
        return res.status(401).res({
          errors: ['Aluno invalido'],
        });
      }

      return res.json(student);
    } catch (error) {
      return res.status(401).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['Invalido'],
        });
      }
      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(401).json({
          errors: ['Aluno invalido'],
        });
      }

      await student.update(req.body);

      return res.json('Aluno atualizado com sucesso');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['Invalido'],
        });
      }
      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(401).json({
          errors: ['Aluno invalido'],
        });
      }

      await student.destroy();

      return res.json('Aluno deletado com sucesso');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
}

export default new StudentController();
