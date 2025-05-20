const E = {
  btnLogin: '#root .login_wrapper #login_button_container .login-box [name="login-button"]',
  btnOpenMenu:
    '#root #header_container .primary_header #menu_button_container .bm-burger-button #react-burger-menu-btn',
  btnLogout:
    '#root #header_container .primary_header #menu_button_container .bm-menu-wrap .bm-menu .bm-item-list [data-test="logout-sidebar-link"]',
};

export class Login {
  loginToWebsite(userKey) {
    cy.fixture('users.json').then((data) => {
      const user = data[userKey];
      cy.get('.login_wrapper #login_button_container .login-box .form_group [data-test="username"]').type(
        user.username
      );
      cy.get('.login_wrapper #login_button_container .login-box .form_group [name="password"]').type(user.password);
      cy.get(E.btnLogin).should('be.visible').click();
    });
  }
  loginOk() {
    cy.get('#page_wrapper #contents_wrapper #header_container .header_secondary_container [data-test="title"]')
      .should('be.visible')
      .should('contain', 'Products');
  }
  logout() {
    cy.get(E.btnOpenMenu).should('be.visible').click();
    cy.get(E.btnLogout).should('be.visible').click();
  }
}
