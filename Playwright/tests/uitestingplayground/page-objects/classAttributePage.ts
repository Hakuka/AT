import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class ClassAttribute extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async pressPrimaryButton() {
    await this.page.locator('button.btn-primary').click();
  }
}
