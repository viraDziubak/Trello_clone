let router = require('express').Router();
let controlError = require('../error/controllerError');
let groupController = require('../controllers/group-controller');

let Group=require('../models/group');

router.get('/:id', groupController.findOne);

router.get('/', groupController.findAll);
router.post('/', groupController.create);
router.put('/:id', groupController.update);
router.delete('/:id', groupController.delete);

module.exports=router;
