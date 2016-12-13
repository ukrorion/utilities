const Provider = require('./../models/provider');

class HomeController {
  index(req, res, next) {
    res.render('index');
  }
}

module.exports = new HomeController();