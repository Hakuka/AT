import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Dynamic Table', async ({ page }) => {
  const pm = new PageManager(page);
  pm.navigateTo().dynamicTablePage();
  const checkForColumn = 'CPU';
  const checkForRow = 'Chrome';

  const labeledUsage = await pm.onDynamicTable().returnYellowUsagePercent();
  await expect.soft(await pm.onDynamicTable().returnIndexForRow(checkForRow)).not.toBe(-1);
  await expect.soft(await pm.onDynamicTable().returnIndexForColumn(checkForColumn)).not.toBe(-1);

  const cellValue = await pm.onDynamicTable().returnValueFromTable(checkForRow, checkForColumn);

  await expect(cellValue).toBe(labeledUsage);
});
