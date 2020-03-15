const { users, links } = require('../models');
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

const findLink = (user, long) =>
  links
    .findOne({ user, long })
    .exec()
    .then(data => {
      if (data) {
        console.log('Found link', data.short);
        return data.short;
      }
    });

const createLink = async (user, long, short) => {
  return (
    (await findLink(user, long)) ||
    links
      .create({ user, long, short })
      .then(() => console.log('Created link', short))
  );
};

module.exports = {
  createUser,
  findUser,
  createLink,
};
