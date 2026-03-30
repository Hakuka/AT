import { expect, test } from '@playwright/test';
import tags from './test-data/tags.json';

test.beforeEach(async ({ page }) => {
  await page.route('*/**/api/tags', async (route) => {
    await route.fulfill({
      body: JSON.stringify(tags),
    });
  });

  await page.goto('https://conduit.bondaracademy.com/');
});

test('Add article', async ({ page }) => {
  await page.route('*/**/api/articles*', async (route) => {
    const response = await route.fetch();
    const responseBody = await response.json();
    responseBody.articles[0].title = 'This is a MOCK test title';
    responseBody.articles[0].description = 'This is a MOCK description';

    await route.fulfill({
      body: JSON.stringify(responseBody),
    });
  });

  await page.getByText('Global Feed').click();
  await expect(page.locator('.navbar-brand')).toHaveText('conduit');
  await expect(page.locator('app-article-list h1').first()).toContainText('This is a MOCK test title');
  await expect(page.locator('app-article-list p').first()).toContainText('This is a MOCK description');
});

test('Delete article', async ({ page, request }) => {
  const articleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: {
      article: { title: 'test article', description: 'test', body: 'test', tagList: [] },
    },
  });

  expect(articleResponse.status()).toEqual(201);

  await page.getByText('global Feed').click();
  await page.getByText('test article').click();
  await page.getByRole('button', { name: 'Delete Article' }).first().click();
  await page.getByText('global Feed').click();

  await expect(page.locator('app-article-list h1').first()).not.toContainText('test article');
});

test('create, delete article', async ({ page, request }) => {
  await page.getByText('New Article').click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill('Playwright course');
  await page.getByRole('textbox', { name: "What's this article about?" }).fill('About playwright');
  await page.getByRole('textbox', { name: 'Write your article (in markdown)' }).fill('using for automation');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  const articleResponse = await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles/');
  const articleResponseBody = await articleResponse.json();
  const slugId = articleResponseBody.article.slug;

  await expect(page.locator('.article-page h1')).toContainText('Playwright course');
  await page.getByText('Home').click();
  await page.getByText('global Feed').click();

  await expect(page.locator('app-article-list h1').first()).toContainText('Playwright course');

  console.log(slugId);
  const deleteArticleResponse = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugId}`, {});

  expect(deleteArticleResponse.status()).toEqual(204);
});
