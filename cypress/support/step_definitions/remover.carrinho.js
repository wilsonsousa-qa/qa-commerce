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
Given("que o usuário verifique pagina", () => {
    cy.visit("http://localhost:3000/");  
}); 

When("ao acessar a pagina do carrinho pelo menu Carrinho", () => {
  cy.get(':nth-child(2) > .nav-link').click(); // clica no menu "Carrinho"
  cy.url().should("include", "/cart.html");   // garante que está na página do carrinho
  cy.get('h1').should('include.text', 'SEU CARRINHO');
});

Then("o usuário deve ver a mensagem de carrinho vazio", () => {
  cy.get('#cart-list > .text-center > p')
    .should('include.text', 'Seu carrinho está vazio');
  cy.get('.text-center > .btn').should('be.visible').click(); // botão "Voltar às compras"
});