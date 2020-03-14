module.exports = (req, res, next) => {
  const { body } = req;
  console.log('Recieved message:', body);
  if (!body.secret && body.secret !== process.env.SECRET)
    res.status(400).send({ message: 'invalid secret' });
  next();
};
