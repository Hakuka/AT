import { expect, test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('AJAX Data', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().ajaxDataPage();
  await pm.onAjaxDataPage().pressButtonTriggeringAjaxRequest();

  const successText = await pm.onAjaxDataPage().getSuccessText();
  expect(successText).toContain('Data loaded with AJAX get request.');
});
