class HomeController {
  async index(req, res) {
    return res.json('home');
  }
}

export default new HomeController();
