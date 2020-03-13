const errors = new Map();
errors.set(5000, { code: 5000, message: 'User already exists' }).set(6000, {
  code: 6000,
  message: 'Fields user or password are missing in body',
});

const throwError = errorcode => {
  const err = new Error();
  const { code, message } = errors.get(errorcode);
  err.code = code;
  err.message = message;
  throw err;
};

module.exports = { throwError, errors };
