import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class VerifyText extends HelperBase {
  readonly textSection = this.page.locator('.bg-primary');

  constructor(page: Page) {
    super(page);
  }

  returnTextElementFromTextSection() {
    return this.textSection.getByText('Welcome UserName!');
  }
}
