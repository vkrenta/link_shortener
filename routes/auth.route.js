const { Router } = require('express');
const router = Router();
const { createUser, findUser } = require('../helpers/mongo');
const { throwError } = require('../helpers/errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res, next) => {
  try {
    // throw new Error('HahahA YOU ARE LOX');
    const { body } = req;
    const { email, userName, password } = body;

    if (!(userName && password && email)) throwError(6000);

    const hashPassword = bcrypt.hashSync(password, Number(process.env.SALT));

    await createUser({
      email,
      password: hashPassword,
      userName,
    });
    res.send({ message: `User ${userName} has been successfully created` });
  } catch (e) {
    next(e);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { body } = req;
    const { userName, password, email } = body;

    if (!((email || userName) && password)) throwError(6000);

    const { hashPassword, userId } = await findUser({
      userName,
      email,
    });

    if (!bcrypt.compareSync(password, hashPassword)) throwError(5001);

    const token = jwt.sign({ userId }, process.env.SECRET, { expiresIn: '1m' });

    res.send({
      token,
    });
  } catch (e) {
    next(e);
  }
});

router.get('/login', async (req, res, next) => {
  try {
    const { headers } = req;
    const token = headers.authorization;
    console.log(jwt.verify(token, process.env.SECRET));
    res.send({ message: 'ok' });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
