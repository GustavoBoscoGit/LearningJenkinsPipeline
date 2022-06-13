const { defineConfig } = require("cypress");

const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("after:screenshot", (details) => {
        const fileName = details.takenAt.replace(/:/g, ".") + ".png";

        //const fileName = details.specName +".1png"; // This fail
        //const fileName = "screenshot.png"; // This works
        const newPath = "cypress/results/mochaScreenshot/" + fileName;

        return new Promise((resolve, reject) => {
          // fs.rename moves the file to the existing directory 'new/path/to'
          // and renames the image to 'screenshot.png'
          fs.rename(details.path, newPath, (err) => {
            if (err) return reject(err);

            // because we renamed and moved the image, resolve with the new path
            // so it is accurate in the test results
            resolve({ path: newPath });
          });
        });
      });
    },
    video: false,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    screenshotOnRunFailure: true,
    reportDir: 'cypress/results',
    overwrite: true,
    html: false,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  screenshotsFolder: 'cypress/results/mochaScreenshot'
});
