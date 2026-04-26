import { HelperBase } from './helperBase';

export class AlertsPage extends HelperBase {
  readonly alertButton = this.page.getByRole('button', { name: 'Alert' });
  readonly confirmButton = this.page.getByRole('button', { name: 'Confirm' });
  readonly promptButton = this.page.getByRole('button', { name: 'Prompt' });

  //should be move to helper
  async acceptNextDialog(value?: string) {
    const dialog = await this.page.waitForEvent('dialog');
    await dialog.accept(value);
    return dialog;
  }
}
