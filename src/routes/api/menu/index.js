const { Router } = require('express');
const Menu = require('../../../controller/menu')
const MenuRouter = Router();

// /api/v1/menu/
MenuRouter.get('/', Menu.getAll);
// /api/v1/menu/add
MenuRouter.post('/add', Menu.add);
// /api/v1/:dishes
MenuRouter.get('/id/:id', Menu.getById);
MenuRouter.get('/label/:label', Menu.getByLabel);
MenuRouter.post('/update/:id', );
MenuRouter.delete('/:id', )

module.exports = MenuRouter;
