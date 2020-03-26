module.exports = (req, res, next) => {
  const { method, url, body, headers } = req;
  console.log('Recieved message:', { method, url, headers, body });
  // if (!body.secret && body.secret !== process.env.SECRET && method !== 'GET')
  //   res.status(400).send({ message: 'invalid secret' });
  next();
};
