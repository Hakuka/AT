import { HelperBase } from './helperBase';

export class CheckoutOverviewPage extends HelperBase {
  readonly finishButton = this.page.getByRole('button', { name: 'Finish' });
}
