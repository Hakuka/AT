import { test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test('Navigate to form page', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datepickerPage();
  await pm.navigateTo().smartTable();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test('parametrized methods', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().formLayoutsPage();
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndOption('test@test.com', 'Wel1', 'Option 1');
  await pm.onFormLayoutsPage().submitInLineFormWithNameEmailAndCheckbox('John Smith', 'John@test.com', true);
  await pm.navigateTo().datepickerPage();
  await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(5);
  await pm.onDatePickerPage().selectDatepickerWithRangeFromToday(6, 15);
});
