import { HelperBase } from './helperBase';

export class LoginPage extends HelperBase {
  readonly usernameField = this.page.getByRole('textbox', { name: 'Username' });
  readonly passwordField = this.page.getByRole('textbox', { name: 'Password' });
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });

  async loginUsingUsernameAndPassword(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
