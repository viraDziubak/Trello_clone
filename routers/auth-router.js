const router=require('express').Router();
const controller = require('../controllers/auth-controller');


router.post('/login', controller.loginController);
router.post('/register', controller.registerController);

module.exports = router;