let serverConfig = require('../bin/server');
let server = serverConfig.server;
let port = serverConfig.port;

global.before(function() {
  process.env.NODE_ENV = 'test';
  server.listen(port);
});

global.after(function() {
  server.close();
});