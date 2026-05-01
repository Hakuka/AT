import { test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Verify Text', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().verifyTextPage();

  await pm.onVerifyText().returnTextElementFromTextSection().highlight();
});
