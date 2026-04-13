import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Hidden Layers', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().hiddenLayersPage();
  await pm.onHiddenLayersPage().pressButton();
  await pm.onHiddenLayersPage().pressButton();
});
