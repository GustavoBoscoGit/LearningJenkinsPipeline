const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportTitle: "Cypress Test Report",
    reportDir: "cypress/report",
    overwrite: true,
    html: true,
    json: true,
  },
});
