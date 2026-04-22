import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Visibility', async ({ page }) => {
  const pm = new PageManager(page);
  const v = pm.onVisibility();

  await pm.navigateTo().visibilityPage();
  await expect(v.hideButton).toBeVisible();
  //and others as above if needed...

  await pm.onVisibility().hideButton.click();

  await expect(v.removedButton).not.toBeAttached();
  await expect(v.zeroWidthButton).toBeHidden();
  await expect(v.visibilityHiddenButton).toBeHidden();
  await expect(v.displayNoneButton).toBeHidden();
  await expect(v.opacityButton).toHaveCSS('opacity', '0');
  await expect(v.offscreenButton).not.toBeInViewport();

  //A bit risky with that timeout inside, but I couldn't figure out a better solution for now. Can be used for others also
  await expect(await pm.onVisibility().canReceiveClick(v.overlappedButton)).toBe(false);
});
