import { Page } from '@playwright/test';

export class GlobalMenu {
  constructor(private readonly page: Page) {}

  get menuButton() {
    return this.page.locator('#react-burger-menu-btn');
  }

  get logoutLink() {
    return this.page.locator('#logout_sidebar_link');
  }

  get cartLink() {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
