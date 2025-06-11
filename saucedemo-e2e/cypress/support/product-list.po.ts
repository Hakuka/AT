import {
  isSortedNameAscending,
  isSortedNameDescending,
  isSortedPriceAscending,
  isSortedPriceDescending,
} from '../utils/sorting';

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

  selectSorting(sortingType: string) {
    cy.fixture('sortingTypes.json').then((data) => {
      const keys: string[] = Object.keys(data);
      const option = data[sortingType];
      cy.get('[data-test="product-sort-container"]').select(option.text);
      cy.get('[data-test="product-sort-container"]').should('have.value', option.value);
    });
  }

  getPrices(): Cypress.Chainable<number[]> {
    return cy.get('.inventory_item_price').then(($els) => {
      return [...$els].map((el) => {
        const raw = el.textContent!.trim().replace('$', '');
        return parseFloat(raw);
      });
    });
  }

  getNames(): Cypress.Chainable<string[]> {
    return cy.get('.inventory_item_name').then(($els) => [...$els].map((el) => el.textContent!.trim()));
  }

  checkSorting(sortingType: string) {
    switch (sortingType) {
      case 'priceAscending':
        this.getPrices().then((prices) => {
          expect(isSortedPriceAscending(prices)).to.be.true;
        });
        break;
      case 'priceDescending':
        this.getPrices().then((prices) => {
          expect(isSortedPriceDescending(prices)).to.be.true;
        });
        break;
      case 'nameAscending':
        this.getNames().then((names) => {
          expect(isSortedNameAscending(names)).to.be.true;
        });
        break;
      case 'nameDescending':
        this.getNames().then((names) => {
          expect(isSortedNameDescending(names)).to.be.true;
        });
        break;
    }
  }
}
