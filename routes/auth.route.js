const { Router } = require('express');
const router = Router();
const { createUser, findUser } = require('../helpers/mongo');
const { throwError, errors } = require('../helpers/errors');

router.post('/register', async (req, res) => {
  try {
    const { body } = req;
    const { user, password } = body;

    if (!(user && password)) throwError(6000);

    await createUser(body);
    res.send({ message: `Added new user ${body.user}` });
  } catch (e) {
    if (errors.has(e.code)) res.status(400);
    else res.status(500);
    console.error(e);
    res.send({ code: e.code, message: e.message });
  }
});

router.get('/login', async (req, res) => {
  try {
    const { body } = req;
    const { user, password } = body;

    if (!(user && password)) throwError(6000);

    const account = await findUser(user, password);
    res.send({
      message: `User found ${JSON.stringify(account).replace(/\r?"|\r/g, ' ')}`,
    });
  } catch (e) {
    if (errors.has(e.code)) res.status(400);
    else res.status(500);
    console.error(e);
    res.send({ code: e.code, message: e.message });
  }
});

module.exports = router;
