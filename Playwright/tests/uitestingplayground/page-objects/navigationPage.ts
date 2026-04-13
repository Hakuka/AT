import { Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class NavigationPage extends HelperBase {
  readonly ajaxDataMenuItem: Locator;
  readonly dynamicIdMenuItem: Locator;
  readonly classAttributeMenuItem: Locator;
  readonly hiddenLayersMenuItem: Locator;

  constructor(page: Page) {
    super(page);
    this.ajaxDataMenuItem = page.getByText('AJAX Data');
    this.dynamicIdMenuItem = page.getByRole('link', { name: 'Dynamic ID' });
    this.classAttributeMenuItem = page.getByRole('link', { name: 'Class Attribute' });
    this.hiddenLayersMenuItem = page.getByRole('link', { name: 'Hidden Layers' });
  }

  async ajaxDataPage() {
    await this.ajaxDataMenuItem.click();
  }

  async dynamicIdPage() {
    await this.dynamicIdMenuItem.click();
  }

  async classAttributePage() {
    await this.classAttributeMenuItem.click();
  }

  async hiddenLayersPage() {
    await this.hiddenLayersMenuItem.click();
  }
}
