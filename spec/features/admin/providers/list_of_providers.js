require('../../../spec_helper')();

const webdriver = require('webdriverio');
const browser = webdriver.remote({
  desiredCapabilities: { browserName: 'chrome' }
});


const factory = require('factory-girl').factory;
const expect = require('chai').expect;
const Provider = require('../../../../models/provider');

describe('Admin visits providers page', () => {
  before((done) => {
    ADMIN_PROVIDER_PATH = BASE_URL + '/admin/providers';
    Provider.remove().then(()=>{
      factory.createMany('provider', 5).then(res => {
        providers = res;
        return done();
      });
    });
  });

  beforeEach((done) => {
    client = browser.init();
    done();
  });
  afterEach((done) => {
    client.end();
    done();
  });

  it('should be successful', () => {
    return client
      .url(ADMIN_PROVIDER_PATH)
      .getUrl().then(url => {
        return expect(url).to.includes('com/providers');
      })
  });

  // it('should be correctly located', () => {
  //   return browser.wait(until.urlContains('admin/providers'), 10000);
  // });

  it('should see a table with providers information');
  it('each table row should contain provider fields');
  it('should see links for each provider to edit, delete, deactivate information in the action column');
  it('provider name should be a link to provider detail information');
  it('should see a button to add new provider');
});
