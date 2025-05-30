import { AddingRemovingCart } from '../cypress/support/adding-removing-cart.po';
import { Login } from '../cypress/support/login.po';
import { PurchaseHappyPath } from '../cypress/support/purchase-happy-path.po';
const login = new Login();
const purchaseHappyPath = new PurchaseHappyPath();
const addingRemovingCart = new AddingRemovingCart();

describe('Scenario with buying producsts - basic happy path', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.viewport(1920, 1080); //if mobile view test added - move to the top
  });

  it('1 - Login to app', () => {
    cy.visit('/');
    login.loginToWebsite('standard_user');
    login.loginOk();
  });

  it('2 - Add products to the cart', () => {
    purchaseHappyPath.addProduct('product_to_buy_1');
    purchaseHappyPath.addProduct('product_to_buy_2');
  });

  it('3 - Remove Sauce Labs Backpack.', () => {
    addingRemovingCart.removeProducts('product_to_remove_1');
  });

  it('3.5 - Navigate to the cart', () => {
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
  });

  it('4 - Verify items added to the cart and their quantity', () => {
    purchaseHappyPath.verifyItemsToBuy('product_to_buy_2');
    purchaseHappyPath.verifyNumberOfItems(1);
  });

  it('5 - Remove Sauce Labs Fleece Jacket', () => {
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').should('be.visible').click();
  });

  it('6 - Remove Sauce Labs Fleece Jacket', () => {
    cy.get('[data-test="continue-shopping"]').should('be.visible').click();
  });

  it('7 - Add products to the cart', () => {
    purchaseHappyPath.addProduct('product_to_buy_1');
    purchaseHappyPath.addProduct('product_to_buy_2');
  });

  it('7.5 - Navigate to the cart', () => {
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
  });

  it('8 - Verify items added to the cart and their quantity', () => {
    purchaseHappyPath.verifyItemsToBuy('product_to_buy_1');
    purchaseHappyPath.verifyItemsToBuy('product_to_buy_2');
    purchaseHappyPath.verifyNumberOfItems(2);
  });
});
