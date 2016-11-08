var express = require('express');
var router = express.Router();
let Home = require('./../controllers/home_controller');

/* GET home page. */
router.get('/', new Home().index);

module.exports = router;
