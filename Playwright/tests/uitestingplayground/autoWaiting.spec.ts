import { expect } from '@playwright/test';
import { test } from '../../test-options';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}/ajax`);
  await page.getByText('Button Triggering AJAX Request').click();
});

test('Auto waiting /AJAX Data', async ({ page }) => {
  const successButton = page.locator('.bg-success');

  await successButton.waitFor({ state: 'attached' });
  const text = await successButton.allTextContents();

  expect(text).toContain('Data loaded with AJAX get request.');
});
