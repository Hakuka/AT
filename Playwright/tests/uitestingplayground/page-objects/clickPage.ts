import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class Click extends HelperBase {
  readonly blueButton = this.page.locator('button.btn-primary');
  readonly greenButton = this.page.locator('button.btn-success');

  constructor(page: Page) {
    super(page);
  }

  async pressBlueButton() {
    await this.blueButton.click();
  }
  async pressGreenButton() {
    await this.greenButton.click();
  }
}
