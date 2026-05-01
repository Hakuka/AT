import { test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Scrollbars', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().scrollbarsPage();
  await pm.onScrollbarsPage().hidingButton.scrollIntoViewIfNeeded;
  await pm.onScrollbarsPage().pressHidingButton();
});
