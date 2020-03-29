const register = async ({
  email,
  userName,
  password,
}: {
  email: string;
  userName: string;
  password: string;
}) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName,
      email,
      password,
    }),
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

export default register;
