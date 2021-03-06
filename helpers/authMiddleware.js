const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') return next();

  try {
    const token = req.headers.authorization;
    console.log('token ', token);
    req.body.user = jwt.verify(token, process.env.SECRET);
    next();
  } catch (e) {
    next(e);
  }
};
