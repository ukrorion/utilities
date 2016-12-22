const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const browser = new webdriver.Builder()
  .forBrowser('chrome')
  .usingServer('http://localhost:4444/wd/hub')
  .build();

describe('User visits home page', () => {
  beforeEach(() => browser.get(BASE_URL));
  after(() => browser.quit());

  it('should be successful', () => {
    browser.findElement(By.css('a[href="/admin"]')).click();
    return browser.wait(until.urlContains('admin'), 10000);
  });
});