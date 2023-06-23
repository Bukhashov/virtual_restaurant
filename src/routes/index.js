const { Router } = require('express');
const router = Router();
const api = require('./api/index');
const admin = require('./admin/index');
const view = require('./view/index');

router.use('/api/v1', api);
// router.use('/admin', admin);
// router.use('/', view);

module.exports = router;