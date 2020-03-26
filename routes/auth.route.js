const { Router } = require('express');
const router = Router();
const { createUser, findUser } = require('../helpers/mongo');
const { throwError } = require('../helpers/errors');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res, next) => {
  try {
    // throw new Error('HahahA YOU ARE LOX');
    const { body } = req;
    const { user, password } = body;

    if (!(user && password)) throwError(6000);

    const hashPassword = bcrypt.hashSync(password, 10);

    await createUser({
      user,
      password: hashPassword,
    });
    res.send({ user });
  } catch (e) {
    next(e);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { body } = req;
    const { user, password } = body;

    if (!(user && password)) throwError(6000);

    await findUser(user, password);
    res.send({
      user,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
