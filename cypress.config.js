const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportTitle: "Cypress Test Report",
    reportDir: "cypress/report",
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  screenshotsFolder: "cypress/screenshot/test2.cy.js/*"
});
