const { defineConfig } = require("cypress");

const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    video: false,
  },
});
//npx cypress run --config video=false --env allure=true