const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();

const AuthController = require('../../../controller/auth/candidate');

// /api/v1/auth/singin
router.post('/singin', [
    check('email', "Email is required").isEmail(),
    check('password', 'Password is requried').isLength({ min: 8 })
], AuthController.singin);

// /api/v1/auth/singup
router.post('/singup', [
    check('email', "Email is required").isEmail(),
    check('password', 'Password is requried').isLength({ min: 8 })
], AuthController.singup);

// /api/v1/auth/update
router.post('/candidate/update', AuthController.singup);
// /api/v1/auth/candidate
router.delete('/candidate', AuthController.delete);


module.exports = router;