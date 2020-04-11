const { Router } = require('express');
const router = Router();
const { getUserInfo } = require('../helpers/mongo');
const authMiddleware = require('../helpers/authMiddleware');

router.get('/info', authMiddleware, async (req, res, next) => {
  try {
    const { userId } = req.body.user;
    const userInfo = await getUserInfo(userId);
    res.send(userInfo);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
