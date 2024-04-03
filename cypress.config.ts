import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.demoblaze.com/",
    env: {
      petStore: "https://petstore.swagger.io/v2",
      api_key: "special-key"
    },
    pageLoadTimeout: 75000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: {
      runMode: 2,
      openMode: 0
    },
    video: true,
    screenshotOnRunFailure: true,
  },
});
