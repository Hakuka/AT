import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';
import { products } from './test-data/products';
import { users } from './test-data/users';

let pm: PageManager;

test('Purchase - happy path', async ({ page, baseURL }) => {
  pm = new PageManager(page);
  const productsToBuy = [products.item1, products.item2];
  const checkoutData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zipCode: faker.location.zipCode(),
  };

  await test.step('Navigate to login page', async () => {
    await page.goto(`${baseURL}`);
  });

  await test.step('Login as standard user', async () => {
    await pm.onLoginPage().loginUsingUser(users.standardUser);

    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveURL('/inventory.html');
  });

  await test.step('Add items to cart', async () => {
    for (const product of productsToBuy) {
      await pm.onInventoryPage().addProductToCart(product.name).click();
    }
    await expect(pm.onGlobalMenu().shoppingCartIcon).toHaveText(`${productsToBuy.length}`);
  });

  await test.step('Go to the cart', async () => {
    await pm.onGlobalMenu().shoppingCartIcon.click();
    await expect(page.getByText('Your Cart')).toBeVisible();
    await expect(pm.onGlobalMenu().shoppingCartIcon).toHaveText(`${productsToBuy.length}`);
  });

  await test.step('Verify the cart', async () => {
    for (const product of productsToBuy) {
      const cartItem = pm.onCartPage().cartItems.filter({
        has: pm.onCartPage().cartItemName.filter({
          hasText: product.name,
        }),
      });

      //TODO: move to cartPage?
      const itemName = cartItem.locator('[data-test="inventory-item-name"]');
      const itemPrice = cartItem.locator('[data-test="inventory-item-price"]');
      const itemQuantity = cartItem.locator('[data-test="item-quantity"]');

      await expect(itemName).toHaveText(product.name);
      await expect(itemPrice).toHaveText(product.price);
      await expect(itemQuantity).toHaveText(product.qty);
    }
  });

  await test.step('Go to the checkout', async () => {
    await pm.onCartPage().checkoutButton.click();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();
    await expect(pm.onGlobalMenu().shoppingCartIcon).toHaveText(`${productsToBuy.length}`);
    await expect(pm.onCheckoutYourInfoPage().firstNameField).toBeVisible();
    await expect(pm.onCheckoutYourInfoPage().lastNameField).toBeVisible();
    await expect(pm.onCheckoutYourInfoPage().zipPostalCodeField).toBeVisible();
  });

  await test.step('Fill checkout information', async () => {
    await pm.onCheckoutYourInfoPage().fillCheckoutInformation(checkoutData);
    await expect(pm.onCheckoutYourInfoPage().firstNameField).toHaveValue(checkoutData.firstName);
    await expect(pm.onCheckoutYourInfoPage().lastNameField).toHaveValue(checkoutData.lastName);
    await expect(pm.onCheckoutYourInfoPage().zipPostalCodeField).toHaveValue(checkoutData.zipCode);
  });

  await test.step('Go to the checkout overview', async () => {
    await pm.onCheckoutYourInfoPage().continueButton.click();
    //TODO: verify correct page.
  });

  await test.step('Verify the checkout', async () => {
    //TODO: verify qty, prices, price total (item total)
  });

  await test.step('Finish the order and go back to home page', async () => {
    //TODO: verify at the end that cart is empty.
  });
});
