const { Router } = require('express');
const router = Router();

const candidateApi = require('./candidate');
const adminApi = require('./admin');

router.use('/', candidateApi);
router.use('/admin', adminApi);

module.exports = router;