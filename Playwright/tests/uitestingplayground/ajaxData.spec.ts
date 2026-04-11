import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('AJAX Data', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().ajaxDataPage();
  await pm.onAjaxDataPage().pressButtonTriggeringAjaxRequest();

  const successText = await pm.onAjaxDataPage().getSuccessText();
  expect(successText).toContain('Data loaded with AJAX get request.');
});
