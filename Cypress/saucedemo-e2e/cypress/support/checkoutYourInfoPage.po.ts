export class CheckoutYourInfoPage {
  enterCheckoutInformation(clientKey: string) {
    cy.fixture('clients.json').then((data) => {
      const { first_name, last_name, zip_postal_code } = data[clientKey];
      cy.get('[data-test="firstName"]').type(first_name);
      cy.get('[data-test="lastName"]').type(last_name);
      cy.get('[data-test="postalCode"]').type(zip_postal_code);
    });
  }

  verifyCheckoutInformation(clientKey: string) {
    cy.fixture('clients.json').then((data) => {
      const { first_name, last_name, zip_postal_code } = data[clientKey];
      cy.get('[data-test="firstName"]').should('have.value', first_name);
      cy.get('[data-test="lastName"]').should('have.value', last_name);
      cy.get('[data-test="postalCode"]').should('have.value', zip_postal_code);
    });
  }
}
