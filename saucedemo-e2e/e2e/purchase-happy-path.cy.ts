import { Login } from '../cypress/support/login.po';
import { PurchaseHappyPath } from '../cypress/support/purchase-happy-path.po';
const login = new Login();
const purchaseHappyPath = new PurchaseHappyPath();

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

  it('2.5 - Navigate to the cart', () => {
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
  });

  it('3 - Verify items added to the cart and their quantity', () => {
    purchaseHappyPath.verifyItemsToBuy('product_to_buy_1');
    purchaseHappyPath.verifyItemsToBuy('product_to_buy_2');
  });

  it('4 - Navigate to the checkout', () => {
    cy.get('[data-test="checkout"]').should('be.visible').click();
  });

  it('5 - Enter checkout information, verify calues', () => {
    purchaseHappyPath.enterCheckoutInformation('client_1');
    purchaseHappyPath.verifyCheckoutInformation('client_1');
  });

  it('5.5 - Navigate to the checkout overview', () => {
    cy.get('.checkout_buttons #continue').should('be.visible').click();
  });

  it('6 - Verify data in the checkout overview', () => {
    purchaseHappyPath.verifyItemsToBuy('product_to_buy_1');
    purchaseHappyPath.verifyItemsToBuy('product_to_buy_2');
    purchaseHappyPath.verifyNumberOfItems(2);
    purchaseHappyPath.verifyPriceTotal(['product_to_buy_1', 'product_to_buy_2']);
  });

  it('7 - Finish order and go to products page', () => {
    cy.get('[data-test="finish"]').should('be.visible').click();
    cy.get('[data-test="back-to-products"]').should('be.visible').click();
    login.loginOk(); //could be changes to products page displayed and moved to commons...
  });
});
