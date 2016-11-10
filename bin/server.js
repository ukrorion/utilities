#!/usr/bin/env node

var app = require('../app');
var http = require('http');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


var server = http.createServer(app);
mongoose.connect('mongodb://localhost/utilities_'+process.env.NODE_ENV);

module.exports = {
  server: server,
  port: port
};

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}