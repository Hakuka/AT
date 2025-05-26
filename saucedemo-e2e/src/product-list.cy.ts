import { Login } from '../cypress/support/login.po';
import { ProductList } from '../cypress/support/product-list.po';

['standard_user', 'visual_user'].forEach((username) => {
  describe(`Verify product view for user: ${username}`, () => {
    const login = new Login();
    const productList = new ProductList();

    beforeEach(() => {
      cy.viewport(1920, 1080); //if mobile view test added - move to the top
      cy.visit('/');
      cy.title().should('include', 'Swag Labs');
    });

    it('Log in and display list of products', () => {
      login.loginToWebsite(username);
      login.loginOk();
    });

    it('Verify that all products has unique name', () => {
      //todo
    });
  });
});
