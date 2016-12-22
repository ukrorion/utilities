const superagent = require('superagent');
const expect = require('chai').expect;
const factory = require('factory-girl').factory;
const Provider = require('../../../models/provider');
let test_provider;

describe('AdminProviderController', () => {
  before((done)=>{
    controller_path = BASE_URL + '/admin/providers';
    Provider.remove().then(()=>{
      factory.create('provider').then(provider => {
        test_provider = provider;
        done();
      });
    });

  });

  context('index action', () => {
    it('should respond with list of providers', (done) => {
      superagent.get(controller_path)
        .end((err, res) => {
          if(err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.text).to.include(test_provider.name);
            done();
          }
        });
    });
  });
});