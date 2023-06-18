const { Router } = require('express');
const feedbackRouter = Router();
const chatRouter = require('./chat');
const commentRouter = require('./comment');

feedbackRouter.use('/chat', chatRouter);
feedbackRouter.use('/comment', commentRouter);

module.exports = feedbackRouter;