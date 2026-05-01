import { defineConfig, devices } from '@playwright/test';
import { baseConfig } from './base.config';
import { urls } from './urls';

export default defineConfig({
  ...baseConfig,

  // project for swaglabs -saucedemo
  testDir: '../tests/swag-labs',

  use: {
    ...devices['Desktop Chrome'],
    baseURL: urls.swaglabs,
  },

  projects: [
    //basic project for chromium
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
