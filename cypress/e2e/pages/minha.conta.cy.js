describe('Acesso minha conta', () => {
  it('Visita o site e verifica título', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('include', 'Home')
    cy.get('#account-link').click();
    cy.get('h1').should('include.text', 'LOGIN');
    cy.get('#email').type('pedro.silva@gmail.com');
    cy.get('#password').type('Senha123@');   
    cy.get('.btn').click();
    cy.get('legend').should('include.text', 'Status do seu último Pedido');

  })
  
});