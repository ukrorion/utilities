require('../spec_helper')();

const superagent = require('superagent');
const expect = require('chai').expect;

describe('HomeController', () => {
  it('should respond with correct status', (done) => {
    superagent.get(BASE_URL)
      .end((err, res) => {
        if(err) {
          done(err);
        } else {
          expect(res.status).to.equal(200);
          done();
        }
      });
  });
});