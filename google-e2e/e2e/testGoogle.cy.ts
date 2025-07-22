describe('Test strony Google', () => {
    it('powinna załadować stronę i wyświetlić pasek wyszukiwania', () => {
      cy.visit('/');
      cy.title().should('include', 'Google');
      cy.contains('button', 'Zaakceptuj wszystko').should('exist');
    });
  });