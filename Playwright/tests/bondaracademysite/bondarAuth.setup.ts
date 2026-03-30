import { test as setup } from '@playwright/test';
import fs from 'fs';
import user from './.auth/user.json';

const authFile = 'tests/bondaracademysite/.auth/user.json';

setup('authentication', async ({ request }) => {
  const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
      user: { email: process.env.API_BONDARACADEMY_USER_EMAIL, password: process.env.API_BONDARACADEMY_USER_PASSWORD },
    },
  });
  const responseBody = await response.json();
  const accessToken = responseBody.user.token;

  user.origins[0].localStorage[0].value = accessToken;
  fs.writeFileSync(authFile, JSON.stringify(user));

  process.env['ACCESS_TOKEN'] = accessToken;
});
