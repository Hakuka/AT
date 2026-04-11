import { Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class NavigationPage extends HelperBase {
  readonly ajaxDataMenuItem: Locator;
  readonly dynamicIdMenuItem: Locator;

  constructor(page: Page) {
    super(page);
    this.ajaxDataMenuItem = page.getByText('AJAX Data');
    this.dynamicIdMenuItem = page.getByRole('link', { name: 'Dynamic ID' });
  }

  async ajaxDataPage() {
    await this.ajaxDataMenuItem.click();
  }

  async dynamicIdPage() {
    await this.dynamicIdMenuItem.click();
  }
}
