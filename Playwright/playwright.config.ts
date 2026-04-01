import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { TestOptions } from './test-options';

// dotenv config to read from global level .env
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

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
    bondarApiUrl: 'https://conduit-api.bondaracademy.com',
    bondarPageUrl: 'https://conduit.bondaracademy.com',
    uiTestingPlaygroundURL: 'http://www.uitestingplayground.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

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
        browserName: 'chromium',
        storageState: path.resolve(__dirname, 'tests/bondaracademysite/.auth/user.json'),
        extraHTTPHeaders: {
          Authorization: `Token ${process.env.ACCESS_TOKEN}`,
        },
      },
      //before bondaracademysite run that one below
      dependencies: ['bondar-academy-site-setup'],
    },
  ],
});
