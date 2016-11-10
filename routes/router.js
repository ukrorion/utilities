var express = require('express');
var router = express.Router();
var admin = express.Router();
var HomeController = require('./../controllers/home_controller');
var UsersController = require('./../controllers/users_controller');
var AdminDashboard = require('./../controllers/admin/dashboard_controller');


router.route('/')
  .get(HomeController.index);

router.route('/users')
  .get(UsersController.index);
router.route('/users/:id')
  .get(UsersController.show);

admin.route('/')
  .get(AdminDashboard.index);


module.exports = {
  router: router,
  admin: admin
};