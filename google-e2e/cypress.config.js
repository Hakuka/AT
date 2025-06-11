const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'google-e2e/src/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'google-e2e/cypress/support/e2e.js',
    fixturesFolder: 'google-e2e/cypress/fixtures',
    downloadFolder: 'google-e2e/cypress/downloads',
    baseUrl: 'https://www.google.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
