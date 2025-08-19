import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Cenário: Adicionar produto ao carrinho
Given("que o usuário está na página do produto", () => {
  cy.visit("http://localhost:3000/");
});

When('o usuário clica no botão "Adicionar ao Carrinho"', () => {
  cy.get(':nth-child(1) > .card > .card-body > .btn').click();    
});

Then("o produto deve ser adicionado ao carrinho com sucesso", () => {
  cy.get(':nth-child(2) > .nav-link').click();
  cy.get('h1').should('include.text', 'SEU CARRINHO');
  cy.get('.cart-item').should('exist');
});

// Cenário: Verificar itens no carrinho
Given("que o usuário adicionou produtos ao carrinho", () => {
  cy.visit("http://localhost:3000/");
  cy.get(':nth-child(1) > .card > .card-body > .btn').click();
});

When("o usuário acessa a página do carrinho", () => {
  cy.get(':nth-child(2) > .nav-link').click();
});

Then("o usuário deve ver os produtos adicionados no carrinho", () => {
  cy.get('.cart-item').should('exist');
});
