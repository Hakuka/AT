import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class Scrollbars extends HelperBase {
  readonly hidingButton = this.page.getByRole('button', { name: 'Hiding Button' });

  constructor(page: Page) {
    super(page);
  }

  async pressHidingButton() {
    await this.hidingButton.click();
  }
}
