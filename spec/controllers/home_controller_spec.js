const superagent = require('superagent');
const expect = require('chai').expect;

describe('HomeController', () => {
  it('should respond with correct status', (done) => {
    superagent.get("http://localhost:3000")
      .end((err, res) => {
        console.log(res.status);
        if(err) {
          done(err);
        } else {
          expect(res.status).to.equal(200);
          done();
        }
      });
  });
});