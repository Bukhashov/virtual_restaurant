const { Router } = require('express');
const router = Router();
const { API_VERSIN } = require('../../config');
const api = require('./api/index');
const admin = require('./admin/index');

router.use(`/api/${API_VERSIN}`, api);
router.use('/', admin);

module.exports = router;