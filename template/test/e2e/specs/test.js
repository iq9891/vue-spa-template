// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function {{#if_eq lintConfig "airbnb"}}test{{/if_eq}}(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('h1', 50000)
      .assert.containsText('h1', '这是活动时，模板项目')
      .end(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
