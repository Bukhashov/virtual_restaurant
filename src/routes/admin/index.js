const { Router } = require('express');
const adminRouter = Router();

adminRouter.get('/', async (req, res) => {
    res.render('admin', {
        title: 'admin'
    })
})


module.exports = adminRouter;