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
    reportTitle: "Cypress Test Report",
    reportDir: "cypress/report",
    overwrite: true,
    html: true,
    charts: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: false,
  screenshotsFolder: "images",
});
