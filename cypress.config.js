const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  screenshotOnRunFailure: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true
  }
});
