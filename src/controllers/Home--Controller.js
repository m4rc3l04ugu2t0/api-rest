import Student from "../models/Students.js";


class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      firstName: 'Marcelo',
      secondName: 'Augusto',
      email: 'mrcelo014@gmail.com'
    })
    res.json(newStudent);
  }
}

export default new HomeController();
