const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'google-e2e/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'google-e2e/cypress/support/e2e.js',
    fixturesFolder: 'google-e2e/cypress/fixtures',
    downloadFolder: 'google-e2e/downloads',
    screenshotsFolder: 'google-e2e/screenshots',
    videosFolder: 'google-e2e/videos',
    baseUrl: 'https://www.google.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
