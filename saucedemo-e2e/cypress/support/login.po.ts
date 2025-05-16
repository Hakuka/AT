const E = {
  btnLogin:
    '#root .login_wrapper #login_button_container .login-box [name="login-button"]',
};

export class Login {
  loginToWebsite(userKey) {
    cy.fixture('users.json').then((data) => {
      const user = data[userKey];
      cy.get(
        '.login_wrapper #login_button_container .login-box .form_group [name="user-name"]',
      ).type(user.username);
      cy.get(
        '.login_wrapper #login_button_container .login-box .form_group [name="password"]',
      ).type(user.password);
      cy.get(E.btnLogin).should('be.visible').click();
      cy.get(
        '#page_wrapper #contents_wrapper #header_container .header_secondary_container [data-test="title"]',
      )
        .should('be.visible')
        .should('contain', 'Products');
    });
  }
}