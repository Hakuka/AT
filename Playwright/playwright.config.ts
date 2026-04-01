import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// dotenv config to read from global level .env
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

export default defineConfig({
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
    // @ts-expect-error
    bondarApiUrl: 'https://conduit-api.bondaracademy.com',
    bondarPageUrl: 'https://conduit.bondaracademy.com',
    uiTestingPlaygroundURL: 'http://www.uitestingplayground.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  projects: [
    //project for pw-practice
    {
      name: 'pw-practice',
      testDir: './tests/pw-practice',
      use: { ...devices['Desktop Chrome'] },
    },

    //project for uitestingplayground
    {
      name: 'uitestingplayground',
      testDir: './tests/uitestingplayground',
      use: { ...devices['Desktop Chrome'] },
    },

    // project which prepare access token on bondar academy site
    { name: 'bondar-academy-site-setup', testDir: './tests/bondaracademysite', testMatch: 'bondarAuth.setup.ts' },

    // project which prepare new article on bondar academy site and clear it after test
    {
      name: 'bondar-academy-article-setup',
      testMatch: 'newArticle.setup.ts',
      dependencies: ['bondar-academy-site-setup'],
      teardown: 'bondar-academy-article-clean-up',
    },
    {
      name: 'bondar-academy-article-clean-up',
      testDir: './tests/bondaracademysite',
      testMatch: 'articleCleanUp.setup.ts',
      use: {
        storageState: path.resolve(__dirname, 'tests/bondaracademysite/.auth/user.json'),
        extraHTTPHeaders: {
          Authorization: `Token ${process.env.ACCESS_TOKEN}`,
        },
      },
    },

    // project for bondaracademy site
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

    // project for bondaracademy site for like - to test  dependency chain
    {
      name: 'bondar-academy-like-counter',
      testDir: './tests/bondaracademysite',
      testMatch: 'likesCounter.spec.ts',
      use: { ...devices['Desktop Chrome'], storageState: path.resolve(__dirname, 'tests/bondaracademysite/.auth/user.json') },
      dependencies: ['bondar-academy-article-setup'],
    },
  ],
});
