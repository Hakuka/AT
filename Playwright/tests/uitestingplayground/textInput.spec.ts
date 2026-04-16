import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Text Input', async ({ page }) => {
  const pm = new PageManager(page);
  const buttonName = 'new button text';
  await pm.navigateTo().textInputPage();
  await expect(pm.onTextInputPage().myButtonField).toHaveText('');
  await expect(pm.onTextInputPage().primaryButton).toHaveText("Button That Should Change it's Name Based on Input Value");
  await pm.onTextInputPage().myButtonField.fill(buttonName);
  await expect(pm.onTextInputPage().myButtonField).toHaveValue(buttonName);
  await pm.onTextInputPage().pressPrimaryButton();
  await expect(pm.onTextInputPage().primaryButton).toHaveText(buttonName);
});
