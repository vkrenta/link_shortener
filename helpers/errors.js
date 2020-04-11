const errors = new Map();
errors
  .set(5000, { code: 5000, message: 'User already exists' })
  .set(6000, {
    code: 6000,
    message: 'Required fields are missing in body',
  })
  .set(5001, { code: 5001, message: 'Invalid user or password' })
  .set(5002, {
    code: 5002,
    message: 'Link already exists',
  })
  .set(5003, { code: 5003, message: 'You cannot short "short" link ' })
  .set(6001, { code: 6001, message: 'Token expired' });

const throwError = errorCode => {
  const err = new Error();
  const { code, message } = errors.get(errorCode);
  err.code = code;
  err.message = message;
  throw err;
};

const handler = (e, req, res, next) => {
  if (errors.has(e.code)) res.status(400);
  else res.status(500);
  console.error(e);
  res.send({ code: e.code || 500, message: e.message });
};

module.exports = { throwError, errors, handler };
