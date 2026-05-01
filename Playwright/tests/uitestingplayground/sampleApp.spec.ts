import { expect, test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('sample App', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().sampleAppPage();

  await pm.onSampleApp().enterLoginData('user', 'pwd');
  await expect(pm.onSampleApp().loginButton).toBeVisible;
  await pm.onSampleApp().loginButton.click();
  await expect(pm.onSampleApp().logoutButton).toBeVisible;
  await pm.onSampleApp().logoutButton.click();
});
