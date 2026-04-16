import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class TextInput extends HelperBase {
  readonly myButtonField = this.page.getByRole('textbox', { name: 'Set New Button Name' });
  readonly primaryButton = this.page.locator('button.btn-primary');

  constructor(page: Page) {
    super(page);
  }

  async pressPrimaryButton() {
    await this.primaryButton.click();
  }
}
