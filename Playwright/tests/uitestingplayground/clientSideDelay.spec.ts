import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Client Side Delay', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().clientSideDelayPage();
  await expect(pm.onClientSideDelayPage().primaryButton).toHaveText('Button Triggering Client Side Logic');
  await pm.onClientSideDelayPage().pressPrimaryButton();
});
