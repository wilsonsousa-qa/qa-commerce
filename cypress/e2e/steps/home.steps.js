import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que eu acesso a página inicial', () => {
  cy.visit('http://localhost:3000/');
});

When('a página carrega', () => {

});

Then('eu devo ver o título {string}', (Home) => {
  cy.title().should('include', Home);
});
