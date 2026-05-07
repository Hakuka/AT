import { expect } from '@playwright/test';
import { test } from './fixtures/test-options';
import { PageManager } from './page-objects/pageManager';
import { users } from './test-data/users';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

const wrongCredentialsMessage = 'Username and password do not match any user';
const lockedUserMessage = 'Epic sadface: Sorry, this user has been locked out.';
const negativeCases = [
  {
    name: 'correct login, wrong password',
    user: users.userOkLoginWrongPassword,
    expectedMessage: wrongCredentialsMessage,
  },
  {
    name: 'wrong login, existing password',
    user: users.userWrongLoginExistingPassword,
    expectedMessage: wrongCredentialsMessage,
  },
  {
    name: 'wrong login, wrong password',
    user: users.userWrongLoginWrongPassword,
    expectedMessage: wrongCredentialsMessage,
  },
  {
    name: 'locked user',
    user: users.lockedUser,
    expectedMessage: lockedUserMessage,
  },
];

test.describe('Login test', () => {
  let pm: PageManager;

  test.beforeEach(async ({ page }) => {
    pm = new PageManager(page);
  });

  test('Verify login page', async () => {
    await expect(pm.onLoginPage().usernameField).toBeVisible();
    await expect(pm.onLoginPage().passwordField).toBeVisible();
    await expect(pm.onLoginPage().loginButton).toBeVisible();
    await pm.onLoginPage().loginButton.click({ trial: true });
  });

  for (const c of negativeCases) {
    test(`Login test (${c.name})`, async ({ page }) => {
      await pm.onLoginPage().loginUsingUser(c.user);

      await expect(page.getByText(c.expectedMessage)).toBeVisible();
      await expect(page).toHaveURL('/');
    });
  }

  test('Login test (standard user)', async ({ page }) => {
    await pm.onLoginPage().loginUsingUser(users.standardUser);
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveURL('/inventory.html');
    await pm.onGlobalMenu().logout();
  });
});
