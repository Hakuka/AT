import { Login } from '../../cypress/support/login.po';

describe('Check login', () => {
  const login = new Login();

  beforeEach(() => {
    cy.viewport(1920, 1080); //przy dodawaniu mobilnej wersji wyniesc w gorze
    cy.visit('/');
    cy.title().should('include', 'Swag Labs');
  });

  it('Check standard user', () => {
    login.loginToWebsite('standard_user');
    login.loginOk();
    login.logout();
  });
});
