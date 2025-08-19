describe('Acesso carrinho remover compra', () => {
  it('Visita o site e verifica título', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('include', 'Home')
    cy.get(':nth-child(1) > .card > .card-body > .btn').click();
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('h1').should('include.text', 'SEU CARRINHO');
    cy.get('.cart-item > .btn').click();
    cy.get('#cart-list > .text-center > p').should('include.text', 'Seu carrinho está vazio');

  })    
});