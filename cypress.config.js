const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  screenshotOnRunFailure: false,
  video: false,
  videoUploadOnPasses: false,
  projectId: 'p3f9q7',
  reporter: "mochawesome",
  reporterOptions: {
	"reportFilename": "[name]-report",
	"overwrite": true,
	"html": true,
	"json": true,
  },
	e2e: {
		viewportHeight: 600,
		viewportWidth: 1000,
		baseUrl: "https://google.pl",
		chromeWebSecurity: false,
		watchForFileChanges: false,
		retries: 1,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});