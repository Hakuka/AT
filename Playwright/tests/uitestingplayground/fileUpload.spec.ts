import { expect, test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('File upload', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().fileUploadPage();

  await pm.onFileUploadPage().uploadFile('randomPDF1.pdf');
  await expect(pm.onFileUploadPage().uploadedFileText).toHaveText('1 file(s) selected');
});
