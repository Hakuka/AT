import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('File upload', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().fileUploadPage();

  await pm.onFileUploadPage().uploadFile('randomPDF1.pdf');
  await expect(pm.onFileUploadPage().uploadedFileText).toHaveText('1 file(s) selected');
});
