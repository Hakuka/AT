import { expect, test } from '@playwright/test';
import tags from './test-data/tags.json';

test.beforeEach(async ({ page }) => {
  await page.route('*/**/api/tags', async (route) => {
    await route.fulfill({
      body: JSON.stringify(tags),
    });
  });

  await page.goto('https://conduit.bondaracademy.com/');
});

test('Website is displayed', async ({ page }) => {
  await expect(page.locator('.navbar-brand')).toHaveText('conduit');
  await page.waitForTimeout(500);
});
