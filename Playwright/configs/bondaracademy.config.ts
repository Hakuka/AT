import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { baseConfig } from './base.config';
import { urls } from './urls';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export default defineConfig({
  ...baseConfig,

  testDir: '../tests/bondaracademysite',

  use: {
    ...devices['Desktop Chrome'],
    baseURL: urls.bondar,
  },

  projects: [
    // project which prepare access token on bondar academy site
    {
      name: 'bondar-academy-site-setup',
      testDir: '../tests/bondaracademysite',
      testMatch: 'bondarAuth.setup.ts',
    },

    // project which prepare new article on bondar academy site and clear it after test
    {
      name: 'bondar-academy-article-setup',
      testMatch: 'newArticle.setup.ts',
      dependencies: ['bondar-academy-site-setup'],
      teardown: 'bondar-academy-article-clean-up',
    },

    // project which on bondar academy site clear the data after test
    {
      name: 'bondar-academy-article-clean-up',
      testDir: '../tests/bondaracademysite',
      testMatch: 'articleCleanUp.setup.ts',
      use: {
        storageState: path.resolve(__dirname, '../tests/bondaracademysite/.auth/user.json'),
        extraHTTPHeaders: {
          Authorization: `Token ${process.env.ACCESS_TOKEN}`,
        },
      },
    },

    // project for bondaracademy site
    {
      name: 'bondaracademysite',
      testDir: '../tests/bondaracademysite',
      use: {
        browserName: 'chromium',
        storageState: path.resolve(__dirname, '../tests/bondaracademysite/.auth/user.json'),
        extraHTTPHeaders: {
          Authorization: `Token ${process.env.ACCESS_TOKEN}`,
        },
      },
      //before bondaracademysite run that one below
      dependencies: ['bondar-academy-site-setup'],
    },

    // project for bondaracademy site for like functionality - to test dependency chain
    {
      name: 'bondar-academy-like-counter',
      testDir: '../tests/bondaracademysite',
      testMatch: 'likesCounter.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        storageState: path.resolve(__dirname, '../tests/bondaracademysite/.auth/user.json'),
      },
      dependencies: ['bondar-academy-article-setup'],
    },
  ],
});
