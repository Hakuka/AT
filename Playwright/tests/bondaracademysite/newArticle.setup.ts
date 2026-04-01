import { expect } from '@playwright/test';
import { test as setup } from './fixtures/test-options';

setup('create new article', async ({ request, bondarApiUrl }) => {
  const articleResponse = await request.post(`${bondarApiUrl}/api/articles`, {
    headers: {
      Authorization: `Token ${process.env.ACCESS_TOKEN}`,
    },
    data: {
      article: { title: 'test article', description: 'test', body: 'test', tagList: [] },
    },
  });

  expect(articleResponse.status()).toEqual(201);
  const response = await articleResponse.json();
  const slugId = response.article.slug;
  process.env['SLUGID'] = slugId;
});
