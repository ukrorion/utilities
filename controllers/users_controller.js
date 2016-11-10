class UsersController {
  index(req, res, next){
    res.send('respond with a resource');
  }
  show(req, res, next){
    res.send('user id');
  }
}

module.exports = new UsersController();