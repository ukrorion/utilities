const expect = require('chai').expect;
const factory = require('factory-girl').factory;
const Provider = require('../../models/provider');

describe("Provider", () => {
  context('schema and relations', () => {
    before((done) => {
      factory.attrs('provider').then(attrs => {
          provider_attrs = attrs;
          done();
        });
    });

    it('should has list of fields', () => {
      provider = new Provider(provider_attrs);
      expect(provider).to.have.property('name');
      expect(provider).to.have.property('owner_name');
      expect(provider).to.have.property('created_at');
      expect(provider).to.have.property('updated_at');
      expect(provider).to.have.property('address');
    });
  });
});