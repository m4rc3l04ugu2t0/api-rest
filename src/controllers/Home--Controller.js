class HomeController {
  index(req, res) {
    res.json({
      response: 'helloooooo',
    });
  }
}

export default new HomeController();
