import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';
import { users } from './test-data/users';

let pm: PageManager;

test.beforeEach(async ({ page }) => {
  pm = new PageManager(page);
});

test('Purchase - happy path', async ({ page, baseURL }) => {
  await test.step('Navigate to login page', async () => {
    await page.goto(`${baseURL}`);
  });

  await test.step('Login as standard user', async () => {
    await pm.onLoginPage().loginUsingUser(users.standardUser);

    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveURL('/inventory.html');
  });

  //TODO: move items to test-data and use from file
  //items with name, price
  await test.step('Add items to cart', async () => {
    await pm.onInventoryPage().addProductToCart('Sauce Labs Backpack').click();
    await pm.onInventoryPage().addProductToCart('Sauce Labs Fleece Jacket').click();
    await expect(pm.onInventoryPage().shoppingCartIcon).toHaveText('2');
  });

  await test.step('Go to the cart', async () => {
    await pm.onGlobalMenu().cartLink.click();
    await expect(page.getByText('Your Cart')).toBeVisible();
    await expect(pm.onInventoryPage().shoppingCartIcon).toHaveText('2');
  });

  await test.step('Verify the cart', async () => {
    //TODO: verify: qty, prices,
  });

  await test.step('Go to the checkout', async () => {
    //TODO: verify: qty, prices,
  });

  await test.step('Fill checkout information', async () => {
    //TODO: use random values
  });

  await test.step('Go to the checkout overview', async () => {
    //TODO: verify qty, prices, price total (item total)
  });

  await test.step('Finish the order and go back to home page', async () => {
    //TODO: verify at the end that cart is empty.
  });
});
