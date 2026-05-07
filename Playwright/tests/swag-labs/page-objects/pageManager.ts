import { Page } from '@playwright/test';
import { GlobalMenu } from './globalMenu';
import { InventoryPage } from './inventoryPage';
import { LoginPage } from './loginPage';

export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly globalMenu: GlobalMenu;
  private readonly inventoryPage: InventoryPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.globalMenu = new GlobalMenu(this.page);
    this.inventoryPage = new InventoryPage(this.page);
  }

  onLoginPage() {
    return this.loginPage;
  }

  onGlobalMenu() {
    return this.globalMenu;
  }

  onInventoryPage() {
    return this.inventoryPage;
  }
}
