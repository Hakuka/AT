export class ProductList {
  uniqueItemsOnProductList() {
    cy.get('#page_wrapper #inventory_container .inventory_list .inventory_item_name').then(($items) => {
      const names = [...$items].map((item) => item.textContent?.trim()); //jQuery na tablice JS
      // Sprawdzamy czy długość tablicy nazw == liczba nazw po usunięciu duplikatów
      const uniqueNames = Array.from(new Set(names));
      expect(uniqueNames.length).to.equal(names.length);
    });
  }
}
