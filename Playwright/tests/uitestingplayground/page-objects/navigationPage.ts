import { Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class NavigationPage extends HelperBase {
  readonly ajaxDataMenuItem: Locator;

  constructor(page: Page) {
    super(page);
    this.ajaxDataMenuItem = page.getByText('AJAX Data');
  }

  async ajaxDataPage() {
    await this.ajaxDataMenuItem.click();
  }
}
