class DashboardController {
  index(req, res, next){
    res.render('admin/dashboard/index', {title: 'Dashboard'});
  }
}

module.exports = new DashboardController();