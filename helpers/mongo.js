const { users } = require('../models');
const errors = require('./errors');

const createUser = body =>
  users
    .create(body)
    .then(user => console.log('Created user ' + user))
    .catch(() => {
      throw errors.get(5000);
    });

module.exports = {
  createUser,
};
