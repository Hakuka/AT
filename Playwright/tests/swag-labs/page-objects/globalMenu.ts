import { HelperBase } from './helperBase';

export class GlobalMenu extends HelperBase {
  readonly menuButton = this.page.locator('#react-burger-menu-btn');
  readonly logoutButton = this.page.locator('#logout_sidebar_link');
  readonly shoppingCartIcon = this.page.locator('[data-test="shopping-cart-link"]');

  async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
  }
}
