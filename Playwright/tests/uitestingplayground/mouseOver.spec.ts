import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Mouse over', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().mouseOverPage();

  await expect(pm.onMouseOver().clickCount).toHaveText('0');
  await expect(pm.onMouseOver().clickButtonCount).toHaveText('0');

  await pm.onMouseOver().clickMeLink.dblclick();
  await expect(pm.onMouseOver().clickCount).toHaveText('2');
  await pm.onMouseOver().linkButtonLink.dblclick();
  await expect(pm.onMouseOver().clickButtonCount).toHaveText('2');
});
