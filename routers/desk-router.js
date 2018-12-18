let router=require('express').Router();
let deskControllers = require('../controllers/desk-controller');

router.route('/')
  .get(deskControllers.findAll)
  .post(deskControllers.create);

router.route('/:id')
  .get(deskControllers.findOne)
  .put(deskControllers.update)
  .delete(deskControllers.delete);

module.exports=router;