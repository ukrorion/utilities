var express = require('express');
var router = express.Router();
let HomeController = require('./../controllers/home_controller');

/* GET home page. */
router.get('/', HomeController.index);

module.exports = router;
