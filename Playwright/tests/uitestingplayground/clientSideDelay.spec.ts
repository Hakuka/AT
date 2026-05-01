import { expect, test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Client Side Delay', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().clientSideDelayPage();
  await expect(pm.onClientSideDelayPage().primaryButton).toHaveText('Button Triggering Client Side Logic');
  await pm.onClientSideDelayPage().pressPrimaryButton();
});
