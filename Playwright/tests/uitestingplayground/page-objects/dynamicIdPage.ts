import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class DynamicIdPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async pressButtonWithDynamicId() {
    await this.page.getByText('Button with Dynamic ID').click();
  }
}
