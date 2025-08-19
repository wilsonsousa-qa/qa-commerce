import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário ao acessar URL da aplicação", () => {
  cy.visit("http://localhost:3000/");
});

When("o usuário coloca URL no navegador", () => {
  cy.visit("http://localhost:3000/");
});

Then("o usuário deve ser redirecionado para a página inicial", () => {
  cy.title().should("include", "Home");
  cy.get("h1").should("include.text", "Sua Melhor Experiência de Compra Está Aqui!");
});
