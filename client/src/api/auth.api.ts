const authentificate = async (user: String, password: String) => {
  try {
    const response = await fetch('/api/auth/register', {
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

    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export default authentificate;
