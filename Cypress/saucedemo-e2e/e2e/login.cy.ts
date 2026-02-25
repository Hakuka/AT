import { LoginPage } from '../cypress/support/loginPage.po';

describe('Check the user login to the application', () => {
  const loginPage = new LoginPage();
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  beforeEach(() => {
    cy.viewport(1920, 1080); //if mobile view test added - move to the top
    cy.visit('/');
    cy.title().should('include', 'Swag Labs');
  });

  it('Check standard user - login ok', () => {
    loginPage.loginToWebsite('standard_user');
    loginPage.loginOk();
    loginPage.logout();
  });

  it('Check standard user - wrong password', () => {
    loginPage.loginToWebsite('standard_user_wrong_pass');
    loginPage.wrongLoginOrPassword();
  });

  it('Check standard user - wrong name', () => {
    loginPage.loginToWebsite('standard_user_wrong_name');
    loginPage.wrongLoginOrPassword();
  });

  it('Check locked out user', () => {
    loginPage.loginToWebsite('locked_out_user');
    loginPage.userLocked();
  });
});
