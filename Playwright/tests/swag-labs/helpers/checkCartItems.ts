import { expect } from '@playwright/test';
import { CartItemsSection } from '../page-objects/components/cartItemsSection';

type ExpectedProduct = {
  name: string;
  price: string;
  qty: string;
};

export async function expectCartItemsToMatch(cartItemsSection: CartItemsSection, products: ExpectedProduct[]) {
  for (const product of products) {
    await expect(cartItemsSection.itemName(product.name)).toHaveText(product.name);
    await expect(cartItemsSection.itemPrice(product.name)).toHaveText(product.price);
    await expect(cartItemsSection.itemQuantity(product.name)).toHaveText(product.qty);
  }
}
