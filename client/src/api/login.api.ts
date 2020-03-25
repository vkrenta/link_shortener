const login = async (user: String, password: String) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secret: 'qwerty12345',
      user,
      password,
    }),
  });

  const result = await response.json();
  if (!response.ok && response.status !== 500) {
    const error = new Error();
    error.message = JSON.stringify({
      code: result.code,
      message: result.message,
    });
    throw error;
  } else if (response.status === 500) {
    const error = new Error();
    error.message = JSON.stringify({
      code: 500,
      message: 'Internal server error',
    });
    throw error;
  }

  return result;
};

export default login;
