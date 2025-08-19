// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // opções globais
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "http://localhost:3000",
    // mantenha seus .spec.js (ou adapte se preferir .cy.js)
    specPattern: "cypress/e2e/**/*.spec.js",
    setupNodeEvents(on, config) {
      // eventos/node plugins aqui se precisar
      return config;
    },
  },
});
