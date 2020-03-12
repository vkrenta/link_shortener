const { Router } = require('express');
const router = Router();
const { users } = require('../models');

router.post('/register', async (req, res) => {
  try {
    const { body } = req;

    if (!(body.user && body.password))
      return res.status(400).send({ message: 'Incorrect data' });

    await users.create(body);
    res.send({ message: `Added new user ${body.user}` });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
  // res.send(body);
});

module.exports = router;
