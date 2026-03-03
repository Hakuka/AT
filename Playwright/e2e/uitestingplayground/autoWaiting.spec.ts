import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/ajax');
  await page.getByText('Button Triggering AJAX Request').click();
});

test('Auto waiting /AJAX Data', async ({ page }) => {
  const successButton = page.locator('.bg-success');

  await successButton.waitFor({ state: 'attached' });
  const text = await successButton.allTextContents();

  expect(text).toContain('Data loaded with AJAX get request.');
});
