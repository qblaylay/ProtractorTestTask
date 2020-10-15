var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './specs/*Spec.js'

  ],
  capabilities: {
    'browserName': 'chrome',
    'shardTestFiles': true,
  },
  directConnect: true,
  baseUrl: 'https://the-internet.herokuapp.com',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  onPrepare() {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();

    jasmine.getEnv().addReporter(new HtmlReporter({
      takeScreenShotsOnlyForFailedSpecs: true,
      baseDirectory: 'reports'
   }).getJasmine2Reporter());
}
};