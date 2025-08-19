const firstName = 'brasil';
const lastName = 'silva';
const email = `${firstName}.${lastName}@gmail.com`;

describe('Acesso carrinho e preencher os dados', () => {
  it('Visita o site e verifica título', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('include', 'Home')
    cy.get(':nth-child(1) > .card > .card-body > .btn').click();
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('h1').should('include.text', 'SEU CARRINHO');
    cy.get('#totals > .btn').click();
    cy.get('h1').should('include.text', 'CHECKOUT');
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
    cy.get('.btn').click();
    cy.get('h1').should('include.text', 'STATUS DO PEDIDO');
   

  })    
});