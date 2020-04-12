const { users, links, shortCounter } = require('../models');
const { throwError } = require('./errors');
const generateLink = require('./link_generator');

const createUser = ({ email, userName, password }) =>
  users
    .create({ email, userName, password })
    .then(user => console.log('Created user ' + user))
    .catch(e => {
      console.log(e);
      throwError(5000);
    });

const getUserInfo = async id => {
  const data = await users.findById(id);

  const { userName, email, dateCreated, links, clicks } = data;

  data.save();

  return { userName, email, dateCreated, links, clicks };
};

const findUser = ({ email, userName }) => {
  if (email)
    return users
      .findOne({ email })
      .exec()
      .then(data => {
        if (data)
          return {
            hashPassword: data.password,
            userId: data._id,
            userName: data.userName,
            email: data.email,
            dateCreated: data.dateCreated,
          };
        throwError(5001);
      });

  return users
    .findOne({ userName })
    .exec()
    .then(data => {
      if (data)
        return {
          hashPassword: data.password,
          userId: data._id,
          userName: data.userName,
          email: data.email,
          dateCreated: data.dateCreated,
        };
      throwError(5001);
    });
};

const findLink = (userId, long) =>
  links
    .findOne({ userId, long })
    .exec()
    .then(data => {
      if (data) {
        console.log('Found link', data.short);
        return data.short;
      }
    });

const createLink = async (userId, long) => {
  long = long.replace('http://', '').replace('https://', '');
  const founded = await findLink(userId, long);
  if (founded) return founded;

  const short = await nextShortLink();
  const data = await links.create({ userId, long, short });
  console.log('Created link', data.short);
  const user = await users.findById(userId).exec();
  user.links++;
  user.save();
  return `${process.env.BASE_URL}t/${data.short}`;
};

const nextShortLink = async () => {
  const counter = await shortCounter.findOne().exec();
  if (counter && counter.short) {
    const newLink = generateLink(counter.short);
    await shortCounter.updateOne({ short: newLink }).exec();
    return newLink;
  }

  return (await shortCounter.create({ short: '0' })).short;
};

const getLink = async short => {
  const data = await links.findOne({ short }).exec();
  const user = await users.findById(data.userId).exec();
  data.clicks++;
  user.clicks++;
  await data.save();
  await user.save();
  return `https://${data.long}`;
};

const getLinksData = async userId => {
  const data = await links.find({ userId });
  const sendData = [];
  data.forEach(x => {
    sendData.push({
      id: x._id,
      long: `https://${x.long}`,
      short: `${process.env.BASE_URL}t/${x.short}`,
      clicks: x.clicks,
      createdAt: x.createdAt,
    });
  });

  return sendData;
};

module.exports = {
  createUser,
  findUser,
  createLink,
  nextShortLink,
  getLink,
  getLinksData,
  getUserInfo,
};
