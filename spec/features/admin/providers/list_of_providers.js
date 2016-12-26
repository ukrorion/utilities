const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const browser = new webdriver.Builder()
  .forBrowser('chrome')
  .usingServer('http://localhost:4444/wd/hub')
  .build();
const factory = require('factory-girl').factory;

describe('Admin visits providers page', () => {
  before(done => {
    factory.create('provider').then(() => done());
  });
  beforeEach(() => {
    const ADMIN_PROVIDER_PATH = BASE_URL + '/admin/providers';
    browser.get(ADMIN_PROVIDER_PATH)
  });
  after(() => browser.quit());

  it('should be successful', () => {
    return browser.wait(until.urlContains('admin/provider'), 10000);
  });

  it('should see a table with a list of providers', () => {
    return browser.wait(until.urlContains('admin/provider'), 10000);
  });

  it('provider name should be a link to provider detail information');
  it('should see a link to add new provider');
});
