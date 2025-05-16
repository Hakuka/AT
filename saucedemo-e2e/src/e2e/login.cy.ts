import { Login } from '../../cypress/support/login.po';

describe('Login to saucedemo website', () => {
  const login = new Login();

  it('Open and login', () => {
    cy.visit('/');
    cy.title().should('include', 'Swag Labs');
    login.loginToWebsite('standard_user');
  });
});
