import { Page } from '@playwright/test';
import { CartPage } from './cartPage';
import { CheckoutCompletePage } from './checkoutCompletePage';
import { CheckoutOverviewPage } from './checkoutOverviewPage';
import { CheckoutYourInfoPage } from './checkoutYourInfoPage';
import { GlobalMenu } from './components/globalMenu';
import { InventoryPage } from './inventoryPage';
import { LoginPage } from './loginPage';

export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly globalMenu: GlobalMenu;
  private readonly inventoryPage: InventoryPage;
  private readonly cartPage: CartPage;
  private readonly checkoutYourInfoPage: CheckoutYourInfoPage;
  private readonly checkoutOverviewPage: CheckoutOverviewPage;
  private readonly checkoutCompletePage: CheckoutCompletePage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.globalMenu = new GlobalMenu(this.page);
    this.inventoryPage = new InventoryPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutYourInfoPage = new CheckoutYourInfoPage(this.page);
    this.checkoutOverviewPage = new CheckoutOverviewPage(this.page);
    this.checkoutCompletePage = new CheckoutCompletePage(this.page);
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

  onCartPage() {
    return this.cartPage;
  }
  onCheckoutYourInfoPage() {
    return this.checkoutYourInfoPage;
  }

  onCheckoutOverviewPage() {
    return this.checkoutOverviewPage;
  }

  onCheckoutCompletePage() {
    return this.checkoutCompletePage;
  }
}
