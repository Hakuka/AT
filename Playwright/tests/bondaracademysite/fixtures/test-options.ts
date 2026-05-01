import { test as base } from '@playwright/test';
import { urls } from '../../../configs/urls';

export type TestOptions = {
  bondarApiUrl: string;
  bondarPageUrl: string;
};

export const test = base.extend<TestOptions>({
  bondarApiUrl: [urls.bondarApi, { option: true }],
  bondarPageUrl: [urls.bondar, { option: true }],
});
