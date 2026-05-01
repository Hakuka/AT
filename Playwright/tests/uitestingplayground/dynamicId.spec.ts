import { test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Dynamic ID', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().dynamicIdPage();
  await pm.onDynamicIdPage().pressButtonWithDynamicId();
});
