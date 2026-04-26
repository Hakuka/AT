import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Alerts', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().alertsMenuPage();

  const alertDialog = pm.onAlertsPage().acceptNextDialog();
  await pm.onAlertsPage().alertButton.click();
  await alertDialog;

  const confirm1 = pm.onAlertsPage().acceptNextDialog();
  await pm.onAlertsPage().confirmButton.click();
  await confirm1;
  const confirm2 = pm.onAlertsPage().acceptNextDialog();
  await confirm2;

  const prompt1 = pm.onAlertsPage().acceptNextDialog('dino');
  await pm.onAlertsPage().promptButton.click();
  await prompt1;
  const prompt2 = pm.onAlertsPage().acceptNextDialog();
  const textOnPrompt = await prompt2;

  expect(textOnPrompt.message()).toContain('dino');
});
