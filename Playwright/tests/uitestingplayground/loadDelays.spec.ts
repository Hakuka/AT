import { expect, test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Load Delays', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loadDelayMenuItemPage();
  await expect(pm.onLoadDelayPage().primaryButton).toHaveText('Button Appearing After Delay');
  await pm.onLoadDelayPage().pressPrimaryButton();
});
