const errors = new Map();
errors
  .set(5000, { code: 5000, message: 'User already exists' })
  .set(6000, {
    code: 6000,
    message: 'Fields user or password are missing in body',
  })
  .set(5001, { code: 5001, message: 'Invalid user or password' });

const throwError = errorcode => {
  const err = new Error();
  const { code, message } = errors.get(errorcode);
  err.code = code;
  err.message = message;
  throw err;
};

const handler = (e, req, res, next) => {
  if (errors.has(e.code)) res.status(400);
  else res.status(500);
  console.error(e);
  res.send({ code: e.code, message: e.message });
};

module.exports = { throwError, errors, handler };
