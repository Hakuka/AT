import { Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class Visibility extends HelperBase {
  readonly hideButton = this.page.getByRole('button', { name: 'Hide' });
  readonly removedButton = this.page.getByRole('button', { name: 'Removed' });
  readonly zeroWidthButton = this.page.getByRole('button', { name: 'Zero Width' });
  readonly visibilityHiddenButton = this.page.getByRole('button', { name: 'Visibility Hidden' });
  readonly displayNoneButton = this.page.getByRole('button', { name: 'Display None' });
  readonly overlappedButton = this.page.getByRole('button', { name: 'Overlapped' });
  readonly offscreenButton = this.page.getByRole('button', { name: 'Offscreen' });
  readonly opacityButton = this.page.getByRole('button', { name: 'Opacity 0' });

  constructor(page: Page) {
    super(page);
  }

  async canReceiveClick(locator: Locator): Promise<boolean> {
    try {
      await locator.click({ trial: true, timeout: 1000 });
      return true;
    } catch {
      return false;
    }
  }
}
