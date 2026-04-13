import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('button', { name: 'Button' });
});
