module.exports = app => {
  app.use('/api/auth', require('./auth.route'));
  app.use('/api/link', require('./link.route'));
  app.use('/api/user', require('./user.route'));
  app.use('/t/', require('./link_middleware'));
};
