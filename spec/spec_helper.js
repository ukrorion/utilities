process.env.PORT = 4000;
process.env.NODE_ENV = process.env.NODE_ENV || 'test';

const serverConfig = require('../bin/server');
const server = serverConfig.server;
const port = serverConfig.port;
const factory = require('factory-girl').factory;

global.before((done) => {
  BASE_URL = "http://localhost:" + process.env.PORT;

  server.listen(port, 'localhost', () => {
    done();
  });
});

global.after((done) => {
  server.close(() => {
    done();
  });
});
