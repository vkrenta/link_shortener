const sendRequest = async (
  path: string,
  method: string,
  headers: any,
  body: any = null
) => {
  const response = await fetch(path, {
    method,
    headers,
    body,
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

export default sendRequest;
