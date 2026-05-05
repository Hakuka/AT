import { Page } from '@playwright/test';
import { inventoryPage } from './inventoryPage';
import { LoginPage } from './loginPage';
import { Sidebar } from './sidebar';

export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly sidebar: Sidebar;
  private readonly inventoryPage: inventoryPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.sidebar = new Sidebar(this.page);
    this.inventoryPage = new inventoryPage(this.page);
  }

  onLoginPage() {
    return this.loginPage;
  }

  onSidebar() {
    return this.sidebar;
  }

  onInventoryPage() {
    return this.inventoryPage;
  }
}
