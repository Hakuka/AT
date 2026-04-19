import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Class Attribute', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().classAttributePage();
  await pm.onClassAttributePage().pressPrimaryButton();

  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toEqual('Primary button pressed');
    await dialog.accept();
  });
});
