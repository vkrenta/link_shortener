const { Router } = require('express');
const router = Router();
const { throwError } = require('../helpers/errors');
const { createLink } = require('../helpers/mongo');
const authMiddleware = require('../helpers/authMiddleware');

router.post('/create', authMiddleware, async (req, res, next) => {
  try {
    const { body } = req;
    const { user, long } = body;

    if (!(user && long)) throwError(6000);

    const short = process.env.BASE_URL + (await createLink(user.userId, long));

    res.status(200).send({ short });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
