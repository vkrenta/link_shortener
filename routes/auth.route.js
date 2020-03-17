const { Router } = require('express');
const router = Router();
const { createUser, findUser } = require('../helpers/mongo');
const { throwError } = require('../helpers/errors');

router.post('/register', async (req, res, next) => {
  try {
    const { body } = req;
    const { user, password } = body;

    if (!(user && password)) throwError(6000);

    await createUser(body);
    res.send({ message: `Added new user ${body.user}`, code: 1001 });
  } catch (e) {
    next(e);
  }
});

router.get('/login', async (req, res, next) => {
  try {
    const { body } = req;
    const { user, password } = body;

    if (!(user && password)) throwError(6000);

    const account = await findUser(user, password);
    res.send({
      message: `User found ${account.user}`,
      code: 1000,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
