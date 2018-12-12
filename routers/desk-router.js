let router=require('express').Router();
let controlError=require('../error/controllerError');
let deskControllers = require('../controllers/desk-controller');

let Desk=require('../models/desks');


router.get('/:id', deskControllers.findOne);

router.get('/', deskControllers.findAll);
router.post('/', deskControllers.create);
router.put('/:id', deskControllers.update);
router.delete('/:id', deskControllers.delete);

module.exports=router;
