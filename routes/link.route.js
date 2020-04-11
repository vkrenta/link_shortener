const { Router } = require('express');
const router = Router();
const { throwError } = require('../helpers/errors');
const { createLink, getLinksData } = require('../helpers/mongo');
const authMiddleware = require('../helpers/authMiddleware');

router.post('/create', authMiddleware, async (req, res, next) => {
  try {
    const { body } = req;
    const { user, long } = body;

    if (long.includes(process.env.BASE_URL)) throwError(5003);

    const short = process.env.BASE_URL + (await createLink(user.userId, long));

    res.status(200).send({ short });
  } catch (e) {
    next(e);
  }
});

router.get('/load', authMiddleware, async (req, res, next) => {
  try {
    const { user } = req.body;
    console.log(user);
    if (!user) throwError(6000);
    console.log(user.userId);
    const links = await getLinksData(user.userId);

    res.send(links);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
