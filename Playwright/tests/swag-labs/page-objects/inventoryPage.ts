import { HelperBase } from './helperBase';

export class InventoryPage extends HelperBase {
  readonly inventoryItems = this.page.locator('[data-test="inventory-item"]');
  readonly inventoryItemName = this.page.locator('[data-test="inventory-item-name"]');

  addProductToCart(productName: string) {
    const product = this.inventoryItems.filter({
      has: this.inventoryItemName.filter({
        hasText: productName,
      }),
    });

    return product.getByRole('button', { name: 'Add to cart' });
  }
}
