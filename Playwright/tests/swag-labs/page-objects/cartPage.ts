import { HelperBase } from './helperBase';

export class CartPage extends HelperBase {
  readonly cartItems = this.page.locator('[data-test="inventory-item"]');
  readonly cartItemName = this.page.locator('[data-test="inventory-item-name"]');
  readonly checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
}
