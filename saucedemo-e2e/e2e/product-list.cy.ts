import { Login } from '../cypress/support/login.po';
import { ProductList } from '../cypress/support/product-list.po';
const sortingTypes: Record<string, { text: string; value: string }> = require('../cypress/fixtures/sortingTypes.json');

['standard_user', 'problem_user'].forEach((username) => {
  describe(`Verify product view for user: ${username}`, { testIsolation: false }, () => {
    const login = new Login();
    const productList = new ProductList();
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });

    it('Login to the application', () => {
      cy.visit('/');
      cy.title().should('include', 'Swag Labs');
      login.loginToWebsite(username);
      login.loginOk();
    });

    it('Verifies that all products have unique names', () => {
      productList.uniqueItemNamesOnProductList();
    });

    it('Verifies that all products have unique photos', () => {
      productList.uniqueItemPhotosOnProductList();
    });

    it('Verifies that price is not empty', () => {
      productList.priceNotEmpty();
    });

    //not very elegant, something outside of "it" but coulnd't find better execution with results for every test
    (Object.keys(sortingTypes) as Array<keyof typeof sortingTypes>).forEach((key) => {
      const { text } = sortingTypes[key];
      it(`should sort by ${text}`, () => {
        productList.selectSorting(key);
        productList.checkSorting(key);
      });
    });
  });
});
