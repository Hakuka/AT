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
});
