import { defineConfig, devices } from '@playwright/test';
import { baseConfig } from './base.config';
import { urls } from './urls';

export default defineConfig({
  ...baseConfig,

  //project for uitestingplayground
  testDir: '../tests/uitestingplayground',

  use: {
    ...devices['Desktop Chrome'],
    baseURL: urls.uitestingplayground,
  },

  projects: [
    //basic project for chromium
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
