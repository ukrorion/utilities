class HomeController {
  constructor(){
    
  }
  
  index(req, res, next){
    res.render('index', { title: 'Test' });
  }
}

module.exports = new HomeController();