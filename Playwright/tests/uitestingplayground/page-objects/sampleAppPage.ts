import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class SampleApp extends HelperBase {
  readonly userNameField = this.page.getByRole('textbox', { name: 'User Name' });
  readonly passwordField = this.page.locator('input[name="Password"]'); //more stable

  //could be by primary and used for both if we have requirements that there is only one primary button.
  readonly loginButton = this.page.getByRole('button', { name: 'Log In' });
  readonly logoutButton = this.page.getByRole('button', { name: 'Log Out' });

  constructor(page: Page) {
    super(page);
  }

  async enterLoginData(userName: string, password: string) {
    await this.userNameField.fill(userName);
    await this.passwordField.fill(password);
  }
}
