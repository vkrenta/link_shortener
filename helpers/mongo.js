const { users } = require('../models');
const { throwError } = require('./errors');

const createUser = body =>
  users
    .create(body)
    .then(user => console.log('Created user ' + user))
    .catch(() => {
      throwError(5000);
    });

module.exports = {
  createUser,
};
