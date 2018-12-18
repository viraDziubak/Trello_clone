let router=require('express').Router();
let controlError=require('../error/controllerError');
let userControllers = require('../controllers/user-controller');

let User=require('../models/users');
router.get('/:id', userControllers.findOne);
router.get('/', userControllers.findAll);
router.post('/', userControllers.create);
router.put('/:id', userControllers.update);
router.delete('/:id', userControllers.delete);

module.exports=router;
