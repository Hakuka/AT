export class ProductList {
  uniqueItemNamesOnProductList() {
    cy.get('#page_wrapper #inventory_container .inventory_list .inventory_item_name').then(($items) => {
      const names = [...$items].map((item) => item.textContent?.trim()); //jQuery to JS
      const uniqueNames = Array.from(new Set(names));
      expect(uniqueNames.length).to.equal(names.length);
    });
  }
  uniqueItemPhotosOnProductList() {
    cy.get('#page_wrapper #inventory_container .inventory_list img.inventory_item_img:visible')
      .should('have.length.greaterThan', 0)
      .then(($imgs) => {
        const srcs = [...$imgs].map((img) => img.getAttribute('src'));
        const uniqueSrcs = new Set(srcs);
        expect(uniqueSrcs.size).to.eq(srcs.length);
      });
  }
  priceNotEmpty() {
    cy.get('.inventory_item_price').each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .should('match', /\$\s*\d/);
    });
  }
}
