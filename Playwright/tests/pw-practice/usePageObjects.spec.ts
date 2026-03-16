import { test } from '@playwright/test';
import { NavigationPage } from '../pw-practice/page-objects/navigationPage';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test('Navigate to form page', async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
  await navigateTo.datepickerPage();
  await navigateTo.smartTable();
  await navigateTo.toastrPage();
  await navigateTo.tooltipPage();
});
