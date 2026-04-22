import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class MouseOver extends HelperBase {
  readonly clickMeLink = this.page.getByText('Click me', { exact: true });
  readonly linkButtonLink = this.page.getByText('Link Button', { exact: true });
  readonly clickCount = this.page.locator('#clickCount');
  readonly clickButtonCount = this.page.locator('#clickButtonCount');

  constructor(page: Page) {
    super(page);
  }
}
