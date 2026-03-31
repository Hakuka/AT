import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { TestOptions } from './test-options';
// dotenv config to read from global level .env
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<TestOptions>({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    bondarApiUrl: 'https://conduit-api.bondaracademy.com',
    bondarPageUrl: 'https://conduit.bondaracademy.com',
    uiTestingPlaygroundURL: 'http://www.uitestingplayground.com',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects */
  projects: [
    {
      name: 'pw-practice',
      testDir: './tests/pw-practice',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'uitestingplayground',
      testDir: './tests/uitestingplayground',
      use: { ...devices['Desktop Chrome'] },
    },
    { name: 'bondar-academy-site-setup', testDir: './tests/bondaracademysite', testMatch: 'bondarAuth.setup.ts' },
    {
      name: 'bondaracademysite',
      testDir: './tests/bondaracademysite',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/tests/bondaracademysite/.auth/user.json',
        extraHTTPHeaders: {
          Authorization: `Token ${process.env.ACCESS_TOKEN}`,
        },
      },
      //before chromium run that one
      dependencies: ['bondar-academy-site-setup'],
    },
  ],
});
