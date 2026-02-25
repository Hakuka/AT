import { LoginPage } from '../cypress/support/loginPage.po';
import { ProductsPage } from '../cypress/support/productsPage.po';
const sortingTypes: Record<string, { text: string; value: string }> = require('../cypress/fixtures/sortingTypes.json');

['standard_user', 'problem_user'].forEach((username) => {
  describe(`Verify product view for user: ${username}`, { testIsolation: false }, () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    before(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
    });
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });

    it('Login to the application', () => {
      cy.visit('/');
      cy.title().should('include', 'Swag Labs');
      loginPage.loginToWebsite(username);
      loginPage.loginOk();
    });

    it('Verifies that all products have unique names', () => {
      productsPage.uniqueItemNamesOnProductList();
    });

    it('Verifies that all products have unique photos', () => {
      productsPage.uniqueItemPhotosOnProductList();
    });

    it('Verifies that price is not empty', () => {
      productsPage.priceNotEmpty();
    });

    //not very elegant, something outside of "it" but coulnd't find better execution with results for every test
    (Object.keys(sortingTypes) as Array<keyof typeof sortingTypes>).forEach((key) => {
      const { text } = sortingTypes[key];
      it(`should sort by ${text}`, () => {
        productsPage.selectSorting(key);
        productsPage.checkSorting(key);
      });
    });
  });
});
