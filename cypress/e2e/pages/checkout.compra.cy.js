describe('Acesso pagina carrinho', () => {
  it('Visita o site e verifica título', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('include', 'Home')
    cy.get(':nth-child(1) > .card > .card-body > .btn').click();
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('h1').should('include.text', 'SEU CARRINHO');
    cy.get('#totals > .btn').click();
    cy.get('h1').should('include.text', 'CHECKOUT');

  })    
});