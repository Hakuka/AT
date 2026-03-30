import { test as setup } from '@playwright/test';

const authFile = 'tests/bondaracademysite/.auth/user.json';

setup('authentication', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByText('Sign in').click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.API_BONDARACADEMY_USER_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.API_BONDARACADEMY_USER_PASSWORD);
  await page.getByRole('button').click();

  await page.waitForResponse('https://conduit-api.bondaracademy.com/api/tags');

  await page.context().storageState({ path: authFile });
  console.log(authFile);
});
