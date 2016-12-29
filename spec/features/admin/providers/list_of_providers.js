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
        done();
      });
    });
  });

  afterEach(() => { return browser.end() });

  it('should be successful', () => {
    return browser.init()
      .url(ADMIN_PROVIDER_PATH)
      .getUrl().then(url => {
        return expect(url).to.includes('admin/providers');
      })
  });

  it('should see a table with providers information', () => {
    return browser.init()
      .url(ADMIN_PROVIDER_PATH)
      .element('table.table.providers')
      .getText().then(text => {
        return expect(text).to.have.string(providers[0].name);
      })
  });

  it('each table row should contain provider fields', () => {
    return browser.init()
      .url(ADMIN_PROVIDER_PATH)
      .element('table.table.providers tbody tr')
      .getText().then(text => {
        ({ name, owner_name, created_at } = providers[0]);
        return expect(text).to.have.string(`${name} ${owner_name} ${created_at.toDateString()}`);
      })
  });

  it('should see links for each provider to edit, delete, deactivate information in the action column');
  it('provider name should be a link to provider detail information');
  it('should see a button to add new provider');
});
