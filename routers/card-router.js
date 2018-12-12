let router=require('express').Router();
let controlError=require('../error/controllerError')
let Card= require('../models/cards');
let cardControllers = require('../controllers/card-controller');

router.get('/:id', cardControllers.findOne);

router.get('/', cardControllers.findAll);
router.post('/', cardControllers.create);
router.put('/:id', cardControllers.update);
router.delete('/:id', cardControllers.delete);


module.exports=router;
