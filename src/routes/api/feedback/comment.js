const { Router } = require('express');
const commentRouter = Router();
const commentController = require('../../../controller/feedback/comment');

commentRouter.get('/:menu_id', commentController.getById);
commentRouter.post('/add', commentController.add);
commentRouter.get('/quantity/:id', commentController.quantity);

module.exports = commentRouter;