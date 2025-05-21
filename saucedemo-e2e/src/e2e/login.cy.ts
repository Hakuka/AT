import { Login } from '../../cypress/support/login.po';

describe('Check login', () => {
  const login = new Login();

  beforeEach(() => {
    cy.viewport(1920, 1080); //przy dodawaniu mobilnej wersji wyniesc w gore
    cy.visit('/');
    cy.title().should('include', 'Swag Labs');
  });

  it('Check standard user - login ok', () => {
    login.loginToWebsite('standard_user');
    login.loginOk();
    login.logout();
  });

  it('Check standard user - wrong password', () => {
    login.loginToWebsite('standard_user_wrong_pass');
    login.wrongLoginOrPassword();
  });

  it('Check standard user - wrong name', () => {
    login.loginToWebsite('standard_user_wrong_name');
    login.wrongLoginOrPassword();
  });

  it('Check locked out user', () => {
    login.loginToWebsite('locked_out_user');
    login.userLocked();
  });
});
