import { test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Non-Breaking Space', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().nonBreakingSpacePage();
  await pm.onNonBreakingSpace().myButton.highlight();
});
