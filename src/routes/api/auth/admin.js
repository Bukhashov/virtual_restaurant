const { Router } = require('express');
// const { check, validationResult } = require('express-validator');
const adminController = require('../../../controller/auth/admin');
const router = Router();

router.post('/singin', adminController.singin);
router.post('/singup', adminController.singup);

module.exports = router;