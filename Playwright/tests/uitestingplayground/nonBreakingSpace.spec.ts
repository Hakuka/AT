import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Non-Breaking Space', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().nonBreakingSpacePage();
  await pm.onNonBreakingSpace().myButton.highlight();
});
