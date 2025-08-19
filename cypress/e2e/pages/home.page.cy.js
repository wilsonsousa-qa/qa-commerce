class HomePage {
  visit() {
    cy.visit('http://localhost:3000/');
  }

  verificarTitulo(textoEsperado) {
    cy.title().should('include', textoEsperado);
  }
}

export default HomePage;
