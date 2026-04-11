import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Dynamic ID', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().dynamicIdPage();
  await pm.onDynamicIdPage().pressButtonWithDynamicId();
});
