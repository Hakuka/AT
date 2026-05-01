import { defineConfig, devices } from '@playwright/test';
import { baseConfig } from './base.config';
import { urls } from './urls';

export default defineConfig({
  ...baseConfig,

  //project for pw-practice
  testDir: '../tests/pw-practice',

  use: {
    ...devices['Desktop Chrome'],
    baseURL: urls.pwpractice,
  },

  projects: [
    //basic project for chromium
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
