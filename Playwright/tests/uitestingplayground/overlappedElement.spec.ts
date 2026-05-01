import { expect, test } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Overlapped Element', async ({ page }) => {
  const pm = new PageManager(page);
  const id = 'THE id';
  const name = 'THE name';
  await pm.navigateTo().overlappedElementPage();
  await pm.onOverlappedElement().idField.scrollIntoViewIfNeeded();
  await pm.onOverlappedElement().idField.fill(id);
  await pm.onOverlappedElement().nameField.scrollIntoViewIfNeeded();
  await pm.onOverlappedElement().nameField.click(); //force the scroll into view
  await pm.onOverlappedElement().nameField.fill(name);

  await expect(pm.onOverlappedElement().idField).toHaveValue(id);
  await expect(pm.onOverlappedElement().nameField).toHaveValue(name);
});
