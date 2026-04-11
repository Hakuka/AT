import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class AjaxDataPage extends HelperBase {
  readonly successMessage = this.page.locator('.bg-success');

  constructor(page: Page) {
    super(page);
  }

  async pressButtonTriggeringAjaxRequest() {
    await this.page.getByText('Button Triggering AJAX Request').click();
  }

  async getSuccessText() {
    await this.successMessage.waitFor({ state: 'attached' });
    return await this.successMessage.allTextContents();
  }
}
