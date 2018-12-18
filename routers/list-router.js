let router=require('express').Router();
let listControllers = require('../controllers/list-controller');

router.route('/')
  .get(listControllers.findAll)
  .post(listControllers.create);

router.route('/:id')
  .get(listControllers.findOne)
  .put(listControllers.update)
  .delete(listControllers.delete);

module.exports=router;