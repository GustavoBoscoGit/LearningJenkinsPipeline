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
    overwrite: false,
    html: true,
    json: true,
  },
});
