import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';

test('likes counter increase', async ({ page, bondarPageUrl }) => {
  await page.goto(bondarPageUrl);
  await page.getByText('Global Feed').click();
  const firstLikeButton = page.locator('app-article-preview').first().locator('button');
  await expect(firstLikeButton).toContainText('0');
  await firstLikeButton.click();
  await expect(firstLikeButton).toContainText('1');
});
