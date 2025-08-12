import { LoginPage } from '../cypress/support/loginPage.po';
import { ProductsPage } from '../cypress/support/productsPage.po';
import { YourCartPage } from '../cypress/support/yourCartPage.po';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const yourCartPage = new YourCartPage();

describe('Scenario with buying producsts - basic happy path', { testIsolation: false }, () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  beforeEach(() => {
    cy.viewport(1920, 1080); //if mobile view test added - move to the top
  });

  it('1 - Login to app', () => {
    cy.visit('/');
    loginPage.loginToWebsite('standard_user');
    loginPage.loginOk();
  });

  it('2 - Add products to the cart', () => {
    productsPage.addProduct('product_to_buy_1');
    productsPage.addProduct('product_to_buy_2');
  });

  it('3 - Remove Sauce Labs Backpack.', () => {
    productsPage.removeProducts('product_to_remove_1');
  });

  it('3.5 - Navigate to the cart', () => {
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
  });

  it('4 - Verify items added to the cart and their quantity', () => {
    yourCartPage.verifyItemToBuy('product_to_buy_2');
    yourCartPage.verifyNumberOfItems(1);
  });

  it('5 - Remove Sauce Labs Fleece Jacket', () => {
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').should('be.visible').click();
  });

  it('6 - Remove Sauce Labs Fleece Jacket', () => {
    cy.get('[data-test="continue-shopping"]').should('be.visible').click();
  });

  it('7 - Add products to the cart', () => {
    productsPage.addProduct('product_to_buy_1');
    productsPage.addProduct('product_to_buy_2');
  });

  it('7.5 - Navigate to the cart', () => {
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
  });

  it('8 - Verify items added to the cart and their quantity', () => {
    yourCartPage.verifyItemToBuy('product_to_buy_1');
    yourCartPage.verifyItemToBuy('product_to_buy_2');
    yourCartPage.verifyNumberOfItems(2);
  });
});
