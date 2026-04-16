import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Load Delays', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loadDelayMenuItemPage();
  await expect(pm.onLoadDelayPage().primaryButton).toHaveText('Button Appearing After Delay');
  await pm.onLoadDelayPage().pressPrimaryButton();
});
