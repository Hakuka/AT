import { test as base } from '@playwright/test';

export type TestOptions = {
  baseURL: string;
};

export const test = base.extend<TestOptions>({
  baseURL: ['', { option: true }],
});
