const { users, links, shortCounter } = require('../models');
const { throwError } = require('./errors');
const generateLink = require('./link_generator');

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
      if (data) return { user };
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

const createLink = async (user, long) => {
  return (
    (await findLink(user, long)) ||
    links
      .create({ user, long, short: await nextShortLink() })
      .then(async data => {
        console.log('Created link', data.short);
        await setShortLink(data.short);
        return data.short;
      })
  );
};

const setShortLink = async short => {
  return shortCounter.updateOne({ short }).exec();
};

const nextShortLink = async () => {
  const counter = await shortCounter.findOne().exec();
  if (counter && counter.short) return generateLink(counter.short);

  return (await shortCounter.create({ short: '0' })).short;
};

module.exports = {
  createUser,
  findUser,
  createLink,
  nextShortLink,
};
