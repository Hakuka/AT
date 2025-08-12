import { CheckoutOverviewPage } from '../cypress/support/checkoutOverviewPage.po';
import { CheckoutYourInfoPage } from '../cypress/support/checkoutYourInfoPage.po';
import { LoginPage } from '../cypress/support/loginPage.po';
import { ProductsPage } from '../cypress/support/productsPage.po';
import { YourCartPage } from '../cypress/support/yourCartPage.po';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const checkoutYourInfoPage = new CheckoutYourInfoPage();
const checkoutOverviewPage = new CheckoutOverviewPage();
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

  it('2.5 - Navigate to the cart', () => {
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
  });

  it('3 - Verify items added to the cart and their quantity', () => {
    yourCartPage.verifyItemToBuy('product_to_buy_1');
    yourCartPage.verifyItemToBuy('product_to_buy_2');
  });

  it('4 - Navigate to the checkout', () => {
    cy.get('[data-test="checkout"]').should('be.visible').click();
  });

  it('5 - Enter checkout information, verify calues', () => {
    checkoutYourInfoPage.enterCheckoutInformation('client_1');
    checkoutYourInfoPage.verifyCheckoutInformation('client_1');
  });

  it('5.5 - Navigate to the checkout overview', () => {
    cy.get('.checkout_buttons #continue').should('be.visible').click();
  });

  it('6 - Verify data in the checkout overview', () => {
    checkoutOverviewPage.verifyItemToBuy('product_to_buy_1');
    checkoutOverviewPage.verifyItemToBuy('product_to_buy_2');
    checkoutOverviewPage.verifyNumberOfItems(2);
    checkoutOverviewPage.verifyPriceTotal(['product_to_buy_1', 'product_to_buy_2']);
  });

  it('7 - Finish order and go to products page', () => {
    cy.get('[data-test="finish"]').should('be.visible').click();
    cy.get('[data-test="back-to-products"]').should('be.visible').click();
    loginPage.loginOk(); //could be changes to products page displayed and moved to commons...
  });
});
