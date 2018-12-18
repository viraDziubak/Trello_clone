let router=require('express').Router();
let userControllers = require('../controllers/user-controller');

router.route('/')
  .get(userControllers.findAll)
  .post(userControllers.create);

router.route('/:id')
  .get(userControllers.findOne)
  .put(userControllers.update)
  .delete(userControllers.delete);

module.exports=router;