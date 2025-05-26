import { Login } from '../cypress/support/login.po';
import { ProductList } from '../cypress/support/product-list.po';

['standard_user', 'problem_user'].forEach((username) => {
  describe(`Verify product view for user: ${username}`, () => {
    const login = new Login();
    const productList = new ProductList();

    beforeEach(() => {
      cy.viewport(1920, 1080);
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
  });
});
