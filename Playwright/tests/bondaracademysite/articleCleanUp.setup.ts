import { expect } from '@playwright/test';
import { test as setup } from './fixtures/test-options';

setup('delete article', async ({ request, bondarApiUrl }) => {
  const deleteArticleResponse = await request.delete(`${bondarApiUrl}/api/articles/${process.env.SLUGID}`, {});
  expect(deleteArticleResponse.status()).toEqual(204);
});
