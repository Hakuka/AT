import { test as base } from '@playwright/test';

export type TestOptions = {
  uiTestingPlaygroundURL: string;
};

export const test = base.extend<TestOptions>({
  uiTestingPlaygroundURL: ['', { option: true }],
});
