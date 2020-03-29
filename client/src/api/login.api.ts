import { validateEmail } from '../validators';

const login = async (userNameOrEmail: string, password: string) => {
  let param: 'userName' | 'email' = 'userName';
  if (validateEmail(userNameOrEmail)) param = 'email';

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{"${param}":"${userNameOrEmail}","password":"${password}"}`,
  });

  const result = await response.json();
  if (!response.ok) {
    const error = new Error();
    error.message = JSON.stringify({
      code: result.code,
      message: result.message,
    });
    throw error;
  }

  return result;
};

export default login;
