import { HelperBase } from './helperBase';

export class LoginPage extends HelperBase {
  readonly usernameField = this.page.getByRole('textbox', { name: 'Username' });
  readonly passwordField = this.page.getByRole('textbox', { name: 'Password' });
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });

  async loginUsingUser(user: { username: string; password: string }) {
    await this.usernameField.fill(user.username);
    await this.passwordField.fill(user.password);
    await this.loginButton.click();
  }
}
