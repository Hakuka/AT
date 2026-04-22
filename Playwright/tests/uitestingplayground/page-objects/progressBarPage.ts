import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class ProgressBar extends HelperBase {
  readonly startButton = this.page.getByRole('button', { name: 'Start' });
  readonly stopButton = this.page.getByRole('button', { name: 'Stop' });
  readonly progressBar = this.page.getByRole('progressbar');

  constructor(page: Page) {
    super(page);
  }

  async progressBarValue() {
    const value = await this.progressBar.getAttribute('aria-valuenow');
    return Number(value);
  }
}
