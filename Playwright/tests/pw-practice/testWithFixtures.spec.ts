import { faker } from '@faker-js/faker';
import { test } from './fixtures/test-options';

test('parametrized methods', async ({ pageManager, formLayoutsPage }) => {
  const randomFullName = faker.person.fullName();
  const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`;

  await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndOption('test@test.com', 'Wel1', 'Option 1');
  await pageManager.onFormLayoutsPage().submitInLineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false);
});
