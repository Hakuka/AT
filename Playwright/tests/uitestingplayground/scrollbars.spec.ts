import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Scrollbars', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().scrollbarsPage();
  await pm.onScrollbarsPage().hidingButton.scrollIntoViewIfNeeded;
  await pm.onScrollbarsPage().pressHidingButton();
});
