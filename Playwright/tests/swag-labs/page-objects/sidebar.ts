import { Page } from '@playwright/test';

export class Sidebar {
  constructor(private readonly page: Page) {}

  get menuButton() {
    return this.page.locator('#react-burger-menu-btn');
  }

  get logoutLink() {
    return this.page.locator('#logout_sidebar_link');
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
