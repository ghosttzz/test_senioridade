const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  downloadsFolder: 'downloads',
  videosFolder: 'videos',
  fixturesFolder: 'fixtures',
  screenshotsFolder: 'screenshots',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    supportFile: 'support/e2e.js',
    specPattern: 'e2e/integration/*.{js,jsx,ts,tsx}',
  },
});