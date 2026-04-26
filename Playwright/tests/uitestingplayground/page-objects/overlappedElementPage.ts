import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class OverlappedElement extends HelperBase {
  readonly idField = this.page.getByPlaceholder('Id');
  readonly nameField = this.page.getByPlaceholder('Name');

  constructor(page: Page) {
    super(page);
  }
}
