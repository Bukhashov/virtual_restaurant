const { Router } = require('express');
const router = Router();

const authRouter = require('./auth/index');
const menuRouter = require('./menu/index');
const feedbackRouter = require('./feedback/index');

router.use('/auth', authRouter);
router.use('/menu', menuRouter);
router.use('/feedback', feedbackRouter);

module.exports = router;``