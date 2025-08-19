import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const firstName = 'antonio';
const lastName = 'silva';
const email = `${firstName}.${lastName}@gmail.com`;

// Cenário: Preencher dados e finalizar compra
Given("que o usuário já possui o produto ao carrinho", () => {
  cy.visit("http://localhost:3000/");
  cy.get(':nth-child(1) > .card > .card-body > .btn').click(); // adiciona 1º produto
});

When("o usuário acessa a página de checkout", () => {
  cy.get(':nth-child(2) > .nav-link').click(); // clica no menu "Carrinho"
  cy.url().should("include", "/cart.html");
  cy.get('#totals > .btn').click(); // botão de checkout
  cy.get('h1').should('include.text', 'CHECKOUT');
});

When("preenche os dados pessoais e de pagamento", () => {
  cy.get('#first-name').type(firstName);
  cy.get('#last-name').type(lastName);   
  cy.get('#address').type('123 Main St');
  cy.get('#number').type('123');
  cy.get('#cep').type('12345678');
  cy.get('#phone').type('1234567890');
  cy.get('#email').type(email);
  cy.get('#create-account').check().should('be.checked'); 
  cy.get('#password').type('Senha123@');
  cy.get('#confirm-password').type('Senha123@');  
  cy.get('#payment-pix').check().should('be.checked');
  cy.get('#terms').check().should('be.checked');
  cy.get('.btn').click(); // finalizar pedido
});

Then("o usuário deve ver a confirmação do pedido", () => {
  cy.get('h1').should('include.text', 'STATUS DO PEDIDO');
});
