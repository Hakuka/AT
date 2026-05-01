import { test as base } from '@playwright/test';

export type TestOptions = {
  swaglabsURL: string;
};

export const test = base.extend<TestOptions>({
  swaglabsURL: ['', { option: true }],
});
