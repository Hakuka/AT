import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class NonBreakingSpace extends HelperBase {
  readonly myButton = this.page.getByRole('button', { name: 'My button' });

  constructor(page: Page) {
    super(page);
  }
}
