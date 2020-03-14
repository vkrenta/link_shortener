const { Router } = require('express');
const router = Router();
const { throwError } = require('../helpers/errors');

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const { user, long } = body;

    if (!(user && long)) throwError(6000);

    res.send(body);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
