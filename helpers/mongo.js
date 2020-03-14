const { users } = require('../models');
const { throwError } = require('./errors');

const createUser = body =>
  users
    .create(body)
    .then(user => console.log('Created user ' + user))
    .catch(() => {
      throwError(5000);
    });

const findUser = (user, password) =>
  users
    .findOne({ user, password })
    .exec()
    .then(data => {
      if (data) return { id: data._id, user, password };
      throwError(5001);
    });

module.exports = {
  createUser,
  findUser,
};
