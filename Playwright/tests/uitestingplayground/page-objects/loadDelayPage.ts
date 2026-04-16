import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class LoadDelay extends HelperBase {
  readonly primaryButton = this.page.locator('button.btn-primary');

  constructor(page: Page) {
    super(page);
  }

  async pressPrimaryButton() {
    await this.primaryButton.click();
  }
}
