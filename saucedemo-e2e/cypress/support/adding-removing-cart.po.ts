export class AddingRemovingCart {
  removeProducts(nameKey: string) {
    cy.fixture('products.json').then((data) => {
      const name = data[nameKey].name;
      cy.contains('.inventory_list .inventory_item', name).contains('button', 'Remove').should('be.visible').click();
    });
  }
}
