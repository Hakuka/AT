import { HelperBase } from './helperBase';

export class CheckoutCompletePage extends HelperBase {
  readonly backHomeButton = this.page.getByRole('button', { name: 'Back Home' });
  readonly pageTitle = this.page.locator('[data-test="title"]');
  readonly completeHeader = this.page.locator('[data-test="complete-header"]');
}
