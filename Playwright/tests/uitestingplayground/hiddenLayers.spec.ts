import { test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Hidden Layers', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().hiddenLayersPage();
  await pm.onHiddenLayersPage().pressButton();
  await pm.onHiddenLayersPage().pressButton();
});
