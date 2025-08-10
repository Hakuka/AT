import { calculateExpectedTotal } from '../utils/calculateExpectedTotal';

export class PurchaseHappyPath {
  addProduct(nameKey: string) {
    cy.fixture('products.json').then((data) => {
      const name = data[nameKey].name;
      cy.contains('.inventory_list .inventory_item', name)
        .contains('button', 'Add to cart')
        .should('be.visible')
        .click();
    });
  }

  verifyItemsToBuy(itemKey: string) {
    cy.fixture('products.json').then((data) => {
      const name = data[itemKey].name;
      cy.contains('.inventory_item_name', name).should('be.visible');
      cy.contains('.cart_item', name).find('.cart_quantity').should('have.text', '1');
    });
  }

  verifyNumberOfItems(itemNumber: number) {
    cy.get('[data-test="cart-list"]').find('[data-test="inventory-item"]').should('have.length', itemNumber);
  }

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

  verifyPriceTotal(selectedProducts: string[]) {
    calculateExpectedTotal(selectedProducts).then(({ itemTotal, tax, total }) => {
      cy.get('.summary_info .summary_subtotal_label')
        .contains('Item total:')
        .should('contain', `$${itemTotal.toFixed(2)}`);
      cy.get('.summary_info .summary_tax_label')
        .contains('Tax:')
        .should('contain', `$${tax.toFixed(2)}`);
      cy.get('.summary_info .summary_total_label')
        .contains('Total:')
        .should('contain', `$${total.toFixed(2)}`);
    });
  }
}
