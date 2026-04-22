import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';

test.beforeEach(async ({ page, uiTestingPlaygroundURL }) => {
  await page.goto(`${uiTestingPlaygroundURL}`);
});

test('Progress bar', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().progressBarPage();
  await pm.onProgressBar().startButton.click();

  while (true) {
    const progressValue = await pm.onProgressBar().progressBarValue();

    if (progressValue >= 75) {
      await pm.onProgressBar().stopButton.click();
      break;
    }
    console.log(progressValue);
    //let it refresh, to be perfect remove it but can be flaky/spammy
    await page.waitForTimeout(100);
  }
});
