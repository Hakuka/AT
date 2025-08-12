export function verifyItemToBuy(itemKey: string) {
  cy.fixture('products.json').then((data) => {
    const name = data[itemKey].name;
    cy.contains('.inventory_item_name', name).should('be.visible');
    cy.contains('.cart_item', name).find('.cart_quantity').should('have.text', '1');
  });
}

export function verifyNumberOfItems(itemNumber: number) {
  cy.get('[data-test="cart-list"]').find('[data-test="inventory-item"]').should('have.length', itemNumber);
}
