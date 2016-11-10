const Provider = require('./../models/provider');

class HomeController {
  index(req, res, next){
    new Provider({name: 'Get'}).save()
      .then(
        (result) => {
          res.render('index', { title: result.name });
        },
        (error) => {
          res.render('index', { title: error });
        }
      );
  }
}

module.exports = new HomeController();