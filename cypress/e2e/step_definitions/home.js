import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário ao pesquisar pela URL da aplicação", () => {
  cy.visit("http://localhost:3000/");
});

When("o usuário coloca URL no navegador", () => {
  cy.visit("http://localhost:3000/");
}); 

Then("o usuário deve ser redirecionado para a página inicial", () => {
  cy.title().should("include", "Home");
  cy.get("h1").should("include.text", "QA Commerce");   
});