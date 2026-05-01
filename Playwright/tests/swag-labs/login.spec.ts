import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Click', async ({ page }) => {
  const pm = new PageManager(page);
});
