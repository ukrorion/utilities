module.exports  = class HomeController {
  constructor(){
    
  }
  
  index(req, res, next){
    res.render('index', { title: 'Test' });
  }
}