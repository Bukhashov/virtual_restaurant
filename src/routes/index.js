const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();
const AuthController = require('../controller/auth');
const Menu = require('../controller/menu');

// AUTH
router.post('/auth/candidate/singin', [
    check('email', "Email is required").isEmail(),
    check('password', 'Password is requried').isLength({ min: 8 })
], AuthController.singin);

router.post('/auth/candidate/singup', [
    check('email', "Email is required").isEmail(),
    check('password', 'Password is requried').isLength({ min: 8 })
], AuthController.singup);

router.post('/auth/candidate/update', AuthController.singup);
router.delete('/auth/candidate', AuthController.delete);

router.post('/auth/admin/singin', AuthController.singin);
router.post('/auth/admin/singup', AuthController.singup);


// MENU
router.get('/menu/all', Menu.getAll);
router.get('/munu/dishes/:id', )


router.post('feedback', feedback => {
    
})

module.exports = router;