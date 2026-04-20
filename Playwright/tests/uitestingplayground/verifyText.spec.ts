import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Verify Text', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().verifyTextPage();

  await pm.onVerifyText().returnTextElementFromTextSection().highlight();
});
