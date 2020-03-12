module.exports = (req, res, next) => {
  const { body } = req;
  if (!body.secret && body.secret !== process.env.SECRET)
    res.status(400).send({ message: 'invalid secret' });
  next();
};
