import { test as base } from '@playwright/test';

export type TestOptions = {
  bondarApiUrl: string;
  bondarPageUrl: string;
  uiTestingPlaygroundURL: string;
};

export const test = base.extend<TestOptions>({
  bondarApiUrl: ['', { option: true }],
  bondarPageUrl: ['', { option: true }],
  uiTestingPlaygroundURL: ['', { option: true }],
});
