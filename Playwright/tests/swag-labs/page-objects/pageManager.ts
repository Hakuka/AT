import { Page } from '@playwright/test';
import { LoginPage } from './loginPage';
import { Sidebar } from './sidebar';

export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly sidebar: Sidebar;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.sidebar = new Sidebar(this.page);
  }

  onLoginPage() {
    return this.loginPage;
  }

  onSidebar() {
    return this.sidebar;
  }
}
