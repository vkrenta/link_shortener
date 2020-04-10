module.exports = (req, res, next) => {
  const { method, url, body } = req;
  console.log('Recieved message:', { method, url, body });
  // if (!body.secret && body.secret !== process.env.SECRET && method !== 'GET')
  //   res.status(400).send({ message: 'invalid secret' });
  next();
};
