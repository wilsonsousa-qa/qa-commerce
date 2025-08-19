import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/home.page";

const homePage = new HomePage();

Given('que eu acesso a página inicial', () => {
  homePage.visit();
});

When('a página carrega', () => {
  // Aqui podemos colocar checagens adicionais de carregamento
  cy.get('body').should('be.visible'); 
});

Then('eu devo ver o título {string}', (titulo) => {
  homePage.verificarTitulo(titulo);
});

