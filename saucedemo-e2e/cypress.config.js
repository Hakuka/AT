const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'saucedemo-e2e/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'saucedemo-e2e/cypress/support/e2e.js',
    fixturesFolder: 'saucedemo-e2e/cypress/fixtures',
    downloadFolder: 'saucedemo-e2e/downloads',
    screenshotsFolder: 'saucedemo-e2e/screenshots',
    videosFolder: 'saucedemo-e2e/videos',
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
