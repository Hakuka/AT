import { CartItemsSection } from './components/cartItemsSection';
import { HelperBase } from './helperBase';

export class CartPage extends HelperBase {
  readonly checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
  readonly cartItemsSection = new CartItemsSection(this.page);
}
