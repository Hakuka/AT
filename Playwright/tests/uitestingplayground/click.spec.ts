import { expect, test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Click', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().clickPage();
  await expect(pm.onClickPage().blueButton).toHaveText('Button That Ignores DOM Click Event');
  await expect(pm.onClickPage().blueButton).toHaveCSS('background-color', 'rgb(0, 123, 255)');
  await pm.onClickPage().pressBlueButton();
  await expect(pm.onClickPage().greenButton).toHaveText('Button That Ignores DOM Click Event');
  await expect(pm.onClickPage().greenButton).toHaveCSS('background-color', 'rgb(33, 136, 56)');
});
