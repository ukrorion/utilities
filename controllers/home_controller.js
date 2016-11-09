class HomeController {
  index(req, res, next){
    res.render('index', { title: 'Text test' });
  }
}

module.exports = new HomeController();