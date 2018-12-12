let router=require('express').Router();
let controlError=require('../error/controllerError');
let listControllers = require('../controllers/list-controller');

let List=require('../models/lists');


router.get('/:id', listControllers.findOne);

router.get('/', listControllers.findAll);
router.post('/', listControllers.create);
router.put('/:id', listControllers.update);
router.delete('/:id', listControllers.delete);

module.exports=router;
