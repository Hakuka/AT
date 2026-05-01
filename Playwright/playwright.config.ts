import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { urls } from './configs/urls';

// dotenv config to read from global level .env
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  //allows using gui test start
  projects: [
    {
      name: 'uitestingplayground',
      testDir: './tests/uitestingplayground',
      use: {
        baseURL: urls.uitestingplayground,
      },
    },
    {
      name: 'swag-labs',
      testDir: './tests/swag-labs',
      use: {
        baseURL: urls.swaglabs,
      },
    },
    {
      name: 'pw-practice',
      testDir: './tests/pw-practice',
      use: {
        baseURL: urls.pwpractice,
      },
    },
    {
      name: 'bondar',
      testDir: './tests/bondaracademysite',
      use: {
        baseURL: urls.bondar,
      },
    },
  ],
});
