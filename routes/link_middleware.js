const { Router } = require('express');
const router = Router();
const { getLink } = require('../helpers/mongo');

router.get('/:id', async (req, res, next) => {
  try {
    const long = await getLink(req.params.id);
    res.redirect(long);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
