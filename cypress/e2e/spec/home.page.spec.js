describe('Acesso pagina inicial', () => {
  it('Visita o site e verifica título', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('include', 'Home')
    "testFiles";"**/*.feature"

  })
  
});
