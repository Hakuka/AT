// IMPORTANT
// This test is neither optimized nor always valid nor test anything... It serves only as a practice exercise to refresh basic syntax and functions.
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('User facing locators', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email' }).first().click();
  await page.getByRole('button', { name: 'Sign in' }).first().click();

  await page.getByPlaceholder('Jane Doe').click();
  await page.getByText('Using the grid').click();

  await page.getByTitle('IoT Dashboard').click();

  await page.getByTestId('Sign in');
});

test('Locating child elements', async ({ page }) => {
  await page.locator('nb-card nb-radio :text-is("Option 1")').click();
  await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();

  await page.locator('nb-card').getByRole('button', { name: 'Sign in' }).first().click();
  await page.locator('nb-card').nth(3);
});

test('Locating parent elements', async ({ page }) => {
  await page.locator('nb-card', { hasText: 'Using the Grid' }).getByRole('textbox', { name: 'Email' }).click();
  await page
    .locator('nb-card', { has: page.locator('#inputEmail') })
    .getByRole('textbox', { name: 'Email' })
    .click();
  await page.locator('nb-card').filter({ hasText: 'Basic form' }).getByRole('textbox', { name: 'Email' }).click();
  await page
    .locator('nb-card')
    .filter({ has: page.locator('.status-danger') })
    .getByRole('textbox', { name: 'Email' })
    .click();

  await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', { name: 'Email' }).click();
});

test('Reausing the locators', async ({ page }) => {
  const basicForm = page.locator('nb-card').filter({ hasText: 'Basic form' });
  const E = {
    emailField: basicForm.getByRole('textbox', { name: 'Email' }),
    passwordField: basicForm.getByRole('textbox', { name: 'Password' }),
    checkbox: basicForm.locator('nb-checkbox'),
    button: basicForm.getByRole('button'),
  };

  await E.emailField.fill('test@test.com');
  await E.passwordField.fill('Welcome123');
  await E.checkbox.click();
  await E.button.click();

  await expect(E.emailField).toHaveValue('test@test.com');
});

test('Extracting values from DOM', async ({ page }) => {
  const basicForm = page.locator('nb-card').filter({ hasText: 'Basic form' });
  const buttonText = await basicForm.locator('button').textContent();
  expect(buttonText).toEqual('Submit');

  const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents();
  expect(allRadioButtonsLabels).toContain('Option 1');

  const emailField = basicForm.getByRole('textbox', { name: 'Email' });
  await emailField.fill('test@test.com');
  const emailValue = await emailField.inputValue();
  expect(emailValue).toEqual('test@test.com');

  const getByPlaceholderValue = await emailField.getAttribute('placeholder');
  expect(getByPlaceholderValue).toEqual('Email');
});

test('Assertions', async ({ page }) => {
  const basicFormButton = page.locator('nb-card').filter({ hasText: 'Basic form' }).locator('button');

  const text = await basicFormButton.textContent();
  expect(text).toEqual('Submit');

  await expect(basicFormButton).toHaveText('Submit');

  await expect.soft(basicFormButton).toHaveText('Submit');
  await basicFormButton.click();
});
