import { expect, test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
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
