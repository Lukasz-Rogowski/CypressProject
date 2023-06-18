const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'p3f9q7',
  reporter: "mochawesome",
  reporterOptions: {
	"reportFilename": "[name]-report",
	"overwrite": true,
	"html": true,
	"json": true,
  },
	e2e: {
		viewportHeight: 1080,
		viewportWidth: 1440,
		baseUrl: "https://google.pl",
		chromeWebSecurity: false,
		watchForFileChanges: false,
		retries: 1,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});