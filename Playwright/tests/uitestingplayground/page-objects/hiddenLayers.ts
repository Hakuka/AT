import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class HiddenLayers extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async pressButton() {
    await this.page.getByRole('button', { name: 'Button' });
  }
}
