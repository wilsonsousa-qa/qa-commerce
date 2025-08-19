import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Cenário: Remover produto do carrinho
Given("que o usuário está na página do carrinho", () => {
    cy.visit("http://localhost:3000/");
    cy.get(':nth-child(2) > .nav-link').click();
    });

When('o usuário clica no botão "Remover" ao lado do produto', () => {
    cy.get('.cart-item > .btn').click();
    });

Then("o produto deve ser removido do carrinho com sucesso", () => {
    cy.get('#cart-list > .text-center > p').should('include.text', 'Seu carrinho está vazio');
});

// Cenário: Verificar carrinho vazio após remoção
Given("que o usuário removeu todos os produtos do carrinho", () => {
    cy.visit("http://localhost:3000/");
    cy.get(':nth-child(1) > .card > .card-body > .btn').click();
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('.cart-item > .btn').click();
}); 

When("o usuário acessa a página do carrinho", () => {
  cy.get(':nth-child(2) > .nav-link').click();
  cy.get('h1').should('include.text', 'SEU CARRINHO');
});


Then("o usuário deve ver a mensagem de carrinho vazio", () => {
    cy.get('#cart-list > .text-center > p').should('include.text', 'Seu carrinho está vazio');
});
