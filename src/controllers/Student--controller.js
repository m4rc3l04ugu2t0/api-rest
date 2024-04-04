import Student from '../models/Students.js';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    await Student.create({
      firstName: 'slsl',
      secondName: 'slss',
      email: 'sms@mm.com',
      age: 1.2,
      weight: 1.2,
      height: 1.2,
    });
    return res.json(students);
  }
}

export default new StudentController();
