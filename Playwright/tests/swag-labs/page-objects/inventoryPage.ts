import { Page } from '@playwright/test';

export class inventoryPage {
  constructor(private readonly page: Page) {}

  addProductToCart(productName: string) {
    const product = this.page.locator('[data-test="inventory-item"]').filter({
      has: this.page.locator('[data-test="inventory-item-name"]').filter({ hasText: productName }),
    });

    return product.getByRole('button', { name: 'Add to cart' });
  }
}
