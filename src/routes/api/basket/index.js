const { Router } = require('express');
const basketRouter = Router();
const basketController = require('../../../controller/basket/index');

basketRouter.get('/:candidate_id', basketController.getAll)
basketRouter.post('/add', basketController.add);
basketRouter.post('/delete', basketController.delete);

module.exports = basketRouter;