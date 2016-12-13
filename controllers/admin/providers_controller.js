const Provider = require('./../../models/provider');

class ProvidersController{
  index(req, res, next) {
    Provider.find({})
      .then(
        (result) => {
          res.render('admin/providers/index', {providers: result});
        },
        (error) => {
          res.render('admin/providers/index', {error: "Error"});
        }
      );
  }
}

module.exports = new ProvidersController();