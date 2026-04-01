import fs from 'fs';
import path from 'path';
import user from './.auth/user.json';
import { test as setup } from './fixtures/test-options';

const authFile = path.resolve(__dirname, '.auth', 'user.json');

setup('authentication', async ({ request, bondarApiUrl }) => {
  const response = await request.post(`${bondarApiUrl}/api/users/login`, {
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
