import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Cenário: Acessar a conta do usuário
Given("que o usuário acessa a página inicial", () => {
  cy.visit("http://localhost:3000/");
  cy.title().should("include", "Home");
});

When('ele clica no link "Minha Conta"', () => {
  cy.get("#account-link").click();
  cy.get("h1").should("include.text", "LOGIN");
});

When('preenche o email {string} e a senha {string}', (email, senha) => {
  cy.get("#email").type(email);
  cy.get("#password").type(senha);
  cy.get(".btn").click();
});

Then("ele deve ver o status do último pedido", () => {
  cy.get("legend").should("include.text", "Status do seu último Pedido");
});
