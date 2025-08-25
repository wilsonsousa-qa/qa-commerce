describe('Formulario sem preencher um dado', () => {
    it('Deve exibir uma mensagem de erro ao tentar enviar o formulário sem preencher um dado obrigatório', () => {
        cy.visit('http://localhost:3000/checkout');
        cy.title().should("include", "Home");
    
        // Tenta enviar o formulário sem preencher nenhum campo
        cy.get('form').within(() => {
        cy.get('button[type="submit"]').click();
        });
    
        // Verifica se a mensagem de erro é exibida
        cy.get('.error-message').should('be.visible').and('contain', 'Por favor, preencha todos os campos obrigatórios.');
    });
    
});

