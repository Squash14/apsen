const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  // screenshotsFolder: './cypress/reports/mochawesome-report/assets',
  videosFolder: './cypress/reports/mocha/assets',
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/mocha',
    overwrite: false,
    html: false,
    json: true,
  },
  defaultCommandTimeout: 30000,
  failOnStatusCode: false,
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalRunAllSpecs: true,
    video: true,
    baseUrl: 'https://apsen.com.br',
    excludeSpecPattern: [
      'performance*',
      'gobackoldmenu*',
      'header-securityupdate*',
      'tour*',
    ],
  },
})
