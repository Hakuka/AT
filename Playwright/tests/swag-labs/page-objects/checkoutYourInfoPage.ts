import { HelperBase } from './helperBase';

export class CheckoutYourInfoPage extends HelperBase {
  readonly firstNameField = this.page.getByPlaceholder('First Name');
  readonly lastNameField = this.page.getByPlaceholder('Last Name');
  readonly zipPostalCodeField = this.page.getByPlaceholder('Zip/Postal Code');
  readonly continueButton = this.page.getByRole('button', { name: 'Continue' });

  async fillCheckoutInformation(checkoutData: { firstName: string; lastName: string; zipCode: string }) {
    await this.firstNameField.fill(checkoutData.firstName);
    await this.lastNameField.fill(checkoutData.lastName);
    await this.zipPostalCodeField.fill(checkoutData.zipCode);
  }
}
