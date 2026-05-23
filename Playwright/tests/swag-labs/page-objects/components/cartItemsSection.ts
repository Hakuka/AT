import { HelperBase } from '../helperBase';

export class CartItemsSection extends HelperBase {
  readonly cartItems = this.page.locator('[data-test="inventory-item"]');
  readonly cartItemName = this.page.locator('[data-test="inventory-item-name"]');

  itemByName(productName: string) {
    return this.cartItems.filter({
      has: this.page.locator('[data-test="inventory-item-name"]').filter({
        hasText: productName,
      }),
    });
  }

  itemName(productName: string) {
    return this.itemByName(productName).locator('[data-test="inventory-item-name"]');
  }

  itemPrice(productName: string) {
    return this.itemByName(productName).locator('[data-test="inventory-item-price"]');
  }

  itemQuantity(productName: string) {
    return this.itemByName(productName).locator('[data-test="item-quantity"]');
  }
}
