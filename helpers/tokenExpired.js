const { throwError } = require('./errors');

module.exports = (e, req, res, next) => {
  try {
    if (e.name && e.name === 'TokenExpiredError') throwError(6001);
    next();
  } catch (e) {
    next(e);
  }
};